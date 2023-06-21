import styles from "@/app/styles/components.module.css"

const Logos = () => {
    return (
        <>
            <div className={styles.alllogos} >
                <div className={styles.imglogo}>
                    <img src='html.png' />
                </div>
                <div className={styles.imglogo}><img src='css.png' /></div>
                <div className={styles.imglogo}><img src="c.png" /></div>
                <div className={styles.imglogo}><img src='c++.png' /></div>
                <div className={styles.imglogo}><img src='bootstrap.png' /></div>
                <div className={styles.imglogo}><img src='mongodb.png' /></div>
                <div className={styles.imglogo}><img src='mysql.png' /></div>
                <div className={styles.imglogo}><img src='nodejs.png' /></div>
                <div className={styles.imglogo}><img src='python.png' /></div>
                <div className={styles.imglogo}><img src='react.png' /></div>
                <div className={styles.imglogo}><img src='redux.png' /></div>
                <div className={styles.imglogo}><img src='typescript.png' style={{ height: "93px" }} /></div>
               
                <div className={styles.imglogo}><img src='nestjs.png' style={{ height: "96px" }} /></div>
                <div className={styles.imglogo}><img src='material-ui.png' style={{ height: "96px" }} /></div>
                <div className={styles.imglogo}><img src='js.png' style={{ height: "73px" }} /></div>
                <div className={styles.imglogo}><img src='github-logo.png' style={{ height: "73px",backgroundColor:"#fff",borderRadius:"50%" }} /></div>
            </div>
        </>
    )
}

export default Logos;