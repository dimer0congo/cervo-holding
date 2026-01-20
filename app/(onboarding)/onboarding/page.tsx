import { currentUser, auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import OnboardingForm from "./onboarding-form"

export const dynamic = "force-dynamic"

export default async function OnboardingPage() {
    const { userId } = await auth()

    if (!userId) {
        redirect("/sign-in")
    }

    const user = await currentUser()

    if (!user) {
        redirect("/sign-in")
    }

    // Check if already completed to avoid loops
    if (user.publicMetadata?.onboardingCompleted) {
        redirect("/dashboard")
    }

    const email = user.emailAddresses[0]?.emailAddress || ""
    const adminEmail = process.env.ADMIN_EMAIL
    const isAdminCandidate = email === adminEmail

    return (
        <OnboardingForm
            userEmail={email}
            isAdmin={isAdminCandidate}
        />
    )
}
