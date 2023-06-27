"use server"
import { Contact } from "@/models/contact";
import dbConnect from "@/utils/dbconnect";

export const submitContact = async (data) => {
    try {
        await dbConnect();
        await Contact.create(data);
        return {status:"OK",message:"message sent successfully"}
    } catch (error) {
        return {status:"ERROR",message:"error , try again!"}
    }
}