'use client';
import { useState } from "react";
import Footer from "../components/Footer";
import Logos from "../components/logos";
import Navbar from "../components/navbar";
import styles from "@/app/styles/contact.module.css"

const page = () => {
    const [message, setm] = useState({
        name: "",
        email: "",
        message: "",
    })
    const inputevent = (event) => {
        var value = event.target.value;
        var name = event.target.name;

        setm((preval) => {
            return {...preval,name:value}
        })
        console.log(message)
    }
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.form}>
                    <form >
                        <input onChange={inputevent} type="text" name="name" value={message.name} />
                        <input onChange={inputevent} type="email" name="email" value={message.email} />
                        <textarea onChange={inputevent} name="message" value={message} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
                <Logos />
            </div>
            <Footer />
        </>
    )
}
export default page;