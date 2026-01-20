"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function completeOnboarding(formData: any) {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
        throw new Error("Utilisateur non authentifié")
    }

    const email = user.emailAddresses[0].emailAddress
    const adminEmail = process.env.ADMIN_EMAIL

    // Logic for roles
    const role = email === adminEmail ? 'admin' : 'client'

    try {
        const client = await clerkClient()
        await client.users.updateUser(userId, {
            publicMetadata: {
                role,
                onboardingCompleted: true,
                onboardingData: formData, // Optional: store the answers
            },
        })

        revalidatePath("/dashboard")

        // Brief delay to allow Clerk's API consistency to catch up before the client redirects
        await new Promise(resolve => setTimeout(resolve, 500))

        return { success: true, role }
    } catch (error) {
        console.error("Erreur lors de l'onboarding:", error)
        return { success: false, error: "Impossible de finaliser l'inscription" }
    }
}
