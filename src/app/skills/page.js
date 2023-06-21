import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import styles from "@/app/styles/skiils.module.css"
import Logos from "../components/logos";

const page = () => {
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                
                <Logos/>
            </div>
            <Footer/>
        </>
    )
}

export default page;