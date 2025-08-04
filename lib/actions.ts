"use server"
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

export default async function addToWaitlist(formData: FormData){
    const prisma = new PrismaClient()
    const email = formData.get("email")!.toString().trim()

    try {
        await prisma.waitlist.create({
            data: {
                email: email
            }
        })

        console.log("Waitlist submitted:", email)
        
        // Redirect to success page after successful submission
        redirect("/success")
    } catch (error) {
        console.error("Error adding to waitlist:", error)
        throw error
    }
}