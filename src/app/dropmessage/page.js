'use client';

import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "@/app/styles/contact.module.css"
import Animation1 from "../components/Animation1";
import ContactForm from "../components/ContactForm";
import Link from "next/link";


const page = () => {
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.form}>
                    <div className={styles.formbody}>
                        <ContactForm />
                    </div>
                    <div className={styles.contact_div}>
                        <div>
                            <h2>
                                Follow Me on
                            </h2>
                        </div>
                        <div className={styles.inside_contact_div}>
                            <div className={styles.logos_contact}>
                                <Link href="https://www.linkedin.com/in/aditya-sharma-496a40248/"><img className={styles.innlogo} style={{ borderRadius: "30%" }} src="/linkedin.png" /></Link>

                            </div>
                            <div className={styles.logos_contact}>
                                <Link href="https://twitter.com/addissh_">
                                    <img className={styles.innlogo} src="/twitter-sign.png" />
                                </Link>
                            </div>
                            <div className={styles.logos_contact}>
                                <Link href="https://github.com/aditya-sharma02"><img className={styles.innlogo} src="/github-logo.png" height="32px" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Animation1 />
            </div>
            <Footer />
        </>
    )
}
export default page;