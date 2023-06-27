import styles from "@/app/styles/contact.module.css"
import { useState } from "react";
import { submitContact } from "../contact/actions";
const ContactForm = () => {
    const [Status, setStatus] = useState()
    const funcsubmit = async (formData) => {
        // e.preventDefault();
        try {
            // var response = await fetch('http://localhost:3000/api/contact', {
            //     method: 'POST',
            //     headers: { "Content_Type": "application/json" },
            //     body: JSON.stringify({
            //         name: message.name,
            //         email: message.email,
            //         message: message.message
            //     })
            // })
            const response = await submitContact({
                name: formData.get("name"),
                email: formData.get("email"),
                message:formData.get("message")
            })
            if (response.status === 200) {
                // setm({
                //     name: "",
                //     email: "",
                //     message: ""
                // })
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
            <form
                // onSubmit={funcsubmit}
                autoComplete="off" action={funcsubmit}>
                <div className={styles.inputdiv}>
                    <label className={styles.label} for="html">name</label><br />
                    <input
                        className={styles.input}
                        // onChange={inputevent}
                        type="text"
                        name="name"
                    // value={message.name}
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label className={styles.label} for="html">email</label><br />
                    <input style={{ textTransform: "none" }}
                        className={styles.input}
                        // onChange={inputevent}
                        type="email"
                        name="email"
                    // value={message.email}
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label className={styles.label} for="html">Message</label><br />
                    <textarea
                        className={styles.input}
                        rows={3} cols={30}
                        // onChange={inputevent}
                        name="message"
                    // value={message.message}
                    />
                </div>
                <div>
                    <input className={styles.button} type="submit" value="submit" />
                </div>
                <div>
                    {Status === 'success' && <p className={styles.success}>Thank you for your message!</p>}
                    {Status === 'error' && <p className={styles.error}>There was an error submitting your message. Please try again.</p>}
                </div>
            </form>
        </>
    )
}
export default ContactForm;