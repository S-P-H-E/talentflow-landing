"use server"
import { PrismaClient } from "@prisma/client"

export default async function addToWaitlist(formData: FormData){
    const prisma = new PrismaClient()
    const email = formData.get("email")!.toString().trim()

    await prisma.waitlist.create({
        data: {
            email: email
        }
    })

    console.log(email)
}