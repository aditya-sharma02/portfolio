import Link from "next/link";
import styles from "@/app/styles/components.module.css"
const Navbar = () => {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-text" style={{zIndex:1,}}>
                <div className="container-fluid" style={{zIndex:1,color:"pink"}}>
                    <Link className="navbar-brand ms-5 " style={{zIndex:1,color:"pink"}} href="/">Addissh</Link>
                    <button style={{ zIndex: 1, color: "pink" }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={{ zIndex: 1, color: "pink" }} className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ zIndex: 1, color: "pink" }} className="collapse navbar-collapse nav-text" id="navbarNav">
                        <ul className="navbar-nav nav-text mx-auto" style={{ zIndex: 1, color: "pink" }}>
                            
                            <li style={{ zIndex: 1, color: "pink" }} className="nav-item">
                                <Link className="nav-link active" style={{zIndex:1,color:"pink"}} aria-current="page" href="/home">Home</Link>
                            </li>
                            <li style={{ zIndex: 1, color: "pink" }} className="nav-item" >
                                <Link className="nav-link" style={{zIndex:1,color:"pink"}} href="/projects">Projects</Link>
                            </li>
                            <li style={{ zIndex: 1, color: "pink" }} className="nav-item">
                                <Link className="nav-link" style={{zIndex:1,color:"pink"}} href="/contact">Contact</Link>
                            </li>
                            <li style={{ zIndex: 1, color: "pink" }} className="nav-item">
                                <Link className="nav-link" style={{zIndex:1,color:"pink"}} href="/skills">Skills</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div className={styles.nav}>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/home'>Home</Link>
                    <div className={styles.underline}/>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/projects'>Projects</Link>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/contact'>Contact</Link>
                </div>
                <div className={styles.item}>
                    <Link className={styles.linknav} href='/skills'>Skills</Link>
                </div>
            </div>
        </>
    )
}
export default Navbar;