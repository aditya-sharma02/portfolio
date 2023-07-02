import styles from "@/app/styles/contact.module.css"
import { useState } from "react";
import { submitContact } from "../dropmessage/actions";
const ContactForm = () => {
    const [Status, setStatus] = useState("")
    const funcsubmit = async (formData) => {
        try {
            await submitContact({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
            }).then((response) => {
                if (response.status >= 200 && response.status < 400) {
                    setStatus('error')
                } else {
                    setStatus('success')
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            <form
                action={funcsubmit}>
                <div className={styles.inputdiv}>
                    <label className={styles.label} htmlFor="html">name</label><br />
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label className={styles.label} htmlFor="html">email</label><br />
                    <input style={{ textTransform: "none" }}
                        className={styles.input}
                        type="email"
                        name="email"
                    />
                </div>
                <div className={styles.inputdiv}>
                    <label className={styles.label} htmlFor="html">Message</label><br />
                    <textarea
                        className={styles.input}
                        rows={3} cols={30}
                        name="message"
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