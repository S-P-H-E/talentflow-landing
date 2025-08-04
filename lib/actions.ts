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
    } catch (error: any) {
        console.error("Error adding to waitlist:", error)
        
        // Check if it's a unique constraint violation (duplicate email)
        if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
            redirect("/error")
        }
        
        // For other database errors, redirect to error page
        redirect("/error")
    }
    
    // If we reach here, the email was successfully added
    redirect("/success")
}