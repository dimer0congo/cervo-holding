import { clerkMiddleware, createRouteMatcher, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
const isOnboardingRoute = createRouteMatcher(['/onboarding']);
const isAdminRoute = createRouteMatcher(['/dashboard/blog(.*)']);

export default clerkMiddleware(async (auth, req) => {
    const { userId, sessionClaims, redirectToSignIn } = await auth();

    // 1. Protection for dashboard and onboarding
    if (!userId && (isDashboardRoute(req) || isOnboardingRoute(req))) {
        return redirectToSignIn({ returnBackUrl: req.url });
    }

    // 2. Authenticated user logic
    if (userId) {
        const metadata = (sessionClaims?.metadata as any) || {};
        const onboardingCompleted = metadata.onboardingCompleted;
        const role = metadata.role;

        // Force onboarding check for dashboard routes
        if (!onboardingCompleted && isDashboardRoute(req) && !isOnboardingRoute(req)) {
            // OPTIMIZATION: Before redirecting to onboarding, check the real-time metadata 
            // via Clerk API to avoid redirect loops caused by stale session tokens.
            try {
                const client = await clerkClient();
                const user = await client.users.getUser(userId);

                if (user.publicMetadata?.onboardingCompleted) {
                    // Token is stale but user IS onboarded. Allow them through.
                    return NextResponse.next();
                }
            } catch (error) {
                console.error("Clerk API check failed in middleware:", error);
            }

            return NextResponse.redirect(new URL('/onboarding', req.url));
        }

        // Role-based protection: Only admin for specific routes
        if (isAdminRoute(req) && role !== 'admin') {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }

        // If onboarding is completed but user is on /onboarding, redirect to dashboard
        if (onboardingCompleted && isOnboardingRoute(req)) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
