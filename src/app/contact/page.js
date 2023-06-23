'use client';
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "@/app/styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";



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
            var response = await fetch('api/contact', {
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
                        <form onSubmit={funcsubmit} autoComplete="off">
                            <div className={styles.inputdiv}>
                                <label className={styles.label} for="html">name</label><br />
                                <input className={styles.input} onChange={inputevent} type="text" name="name" value={message.name} />
                            </div>
                            <div className={styles.inputdiv}>
                                <label className={styles.label} for="html">email</label><br />
                                <input style={{ textTransform: "none" }} className={styles.input} onChange={inputevent} type="email" name="email" value={message.email} />
                            </div>
                            <div className={styles.inputdiv}>
                                <label className={styles.label} for="html">Message</label><br />
                                <textarea className={styles.input} rows={3} cols={30} onChange={inputevent} name="message" value={message.message} />
                            </div>
                            <div>
                                <input className={styles.button} type="submit" value="submit" />
                            </div>
                            <div>
                                {Status === 'success' && <p className={styles.success}>Thank you for your message!</p>}
                                {Status === 'error' && <p className={styles.error}>There was an error submitting your message. Please try again.</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default page;