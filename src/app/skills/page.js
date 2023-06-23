import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import styles from "@/app/styles/skiils.module.css"
import Logos from "../components/logos";
import Animation1 from "../components/Animation1";

const page = () => {
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                <Logos />
                <Animation1/>
            </div>
            <Footer />
        </>
    )
}

export default page;