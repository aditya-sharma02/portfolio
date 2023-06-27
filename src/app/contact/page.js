'use client';
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "@/app/styles/contact.module.css"
import Animation1 from "../components/Animation1";
import ContactForm from "../components/ContactForm";



const page = () => {
    const [message, setm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [Status, setStatus] = useState()
    const inputevent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setm((preval) => {
            return { ...preval, [name]: value }
        })
    }
    const funcsubmit = async (e) => {
        e.preventDefault();
        try {
            var response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    name: message.name,
                    email: message.email,
                    message: message.message
                })
            })
            if (response.status === 200) {
                setm({
                    name: "",
                    email: "",
                    message: ""
                })
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.form}>
                    <div className={styles.formbody}>
                        <ContactForm/>
                    </div>
                </div>
                <Animation1 />
            </div>
            <Footer />
        </>
    )
}
export default page;