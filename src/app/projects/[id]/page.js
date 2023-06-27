import Animation1 from "@/app/components/Animation1";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/navbar";
import data from "@/app/data";
import styles from "@/app/styles/projects.module.css"
import Link from "next/link";

const page = ({ params }) => {
    var i = 0;
    var tempdata = data[params.id];
    return (
        <>
            <Navbar />
            <div className={styles.body1}>
                <Animation1 />
                <div className={styles.heading1}>
                    projects
                </div>
                <div className={styles.belowheading1}>
                    <div className={styles.l1} />
                    <div className={styles.l2} />
                </div>
                <div className={styles.idpcard}>
                    <Link style={{ textDecoration: "none" }} href={"/projects"} >
                        <div className={styles.arrow}>↩</div>
                    </Link>

                    <div className={styles.idpname}>{tempdata.title}</div>
                    <div className={styles.idpdescription}>{tempdata.description}</div>


                    <div className={styles.fulldesc}>
                        {tempdata.fulldesc}
                    </div>
                    <div className={styles.techheading}>
                        Technology Used
                    </div>
                    <div className={styles.techname}>
                        {tempdata?.techused?.map((elem, id) => {
                            return <div key={id} className={styles.tech}>{elem}</div>
                        })}
                    </div>
                    <Link href={`${tempdata.link}`}>
                        <div className={styles.sourcecode}><img src="/github-logo.png" height={60} /></div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default page;