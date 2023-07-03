import Link from "next/link";
import styles from "@/app/styles/components.module.css"
const Navbar = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/home'>Home</Link>
                    <div className={styles.underline} />
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/about'>About</Link>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/projects'>Projects</Link>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/dropmessage'>Contact</Link>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/skills'>Skills</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;