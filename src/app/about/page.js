import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import styles from "@/app/styles/about.module.css"

const page = () => {
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.data}>
                    <div className={styles.name}>aditya sharma</div>
                    <div className={styles.section}>
                        <div className={styles.box1}>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}>Age : </span>
                                <span className={styles.datadetail}> 21 year</span>
                            </div>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}>Nationality : </span>
                                <span className={styles.datadetail}> India</span>
                            </div>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}>Languages : </span>
                                <span className={styles.datadetail}> Hindi , English</span>
                            </div>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}>Education : </span>
                                <span className={styles.datadetail}> IIIT Bhopal ( Current )</span>
                            </div>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}> Address : </span>
                                <span className={styles.datadetail}> India</span>
                            </div>
                            <div className={styles.extraData}>
                                <span className={styles.dataname}>Email : </span>
                                <span className={styles.datadetail}> adyashma786@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image height={300} width={380} alt="Image_Aditya" className={styles.img} src="/aditya.png"/>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default page;