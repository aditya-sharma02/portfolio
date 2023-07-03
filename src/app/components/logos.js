import styles from "@/app/styles/components.module.css"
import Image from "next/image";
const Logos = () => {
    return (
        <>

            <div className={styles.alllogos} >

                <div className={styles.imglogo}>
                    <Image src='/html.png' height={88} width={88} alt="Image"></Image>
                </div>
                <div className={styles.imglogo}><Image src='/css.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.imglogo}><Image src="/c.png" height={88} width={88} alt="Image" /></div>
                <div className={styles.imglogo}><Image src='/c++.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.il1}><Image src='/bootstrap.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.il1}><Image src='/mongodb.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.il1}><Image src='/mysql.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.il1}><Image src='/nodejs.png' height={88} width={88} alt="Image" /></div>
                <div className={styles.il2}><Image src='/python.png' height={80} width={80} alt="Image" /></div>
                <div className={styles.il2} style={{ width: "12.5vw" }}><Image src='/react.png' height={80} width={80} alt="Image" /></div>
                <div className={styles.il2}><Image src='/redux.png' height={80} width={80} alt="Image" /></div>
                <div className={styles.il2}><img src='/typescript.png' style={{ height: "93px" }} /></div>

                <div className={styles.il3}><Image src='/nestjs.png' style={{ height: "96px" }} height={80} width={80} alt="Image" /></div>
                <div className={styles.il3}><Image src='/material-ui.png' style={{ height: "96px" }} height={80} width={80} alt="Image" /></div>
                <div className={styles.il3} style={{ width: "12.5vw" }}><Image src='/js.png' style={{ height: "73px" }} height={80} width={80} alt="Image" /></div>
                <div className={styles.il3} style={{ width: "12.5vw" }}><Image src='/github-logo.png' style={{ height: "73px", backgroundColor: "#fff", borderRadius: "50%" }} height={80} width={80} alt="Image" /></div>
            </div>
        </>
    )
}

export default Logos;