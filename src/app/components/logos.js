import styles from "@/app/styles/home.module.css"

const Logos = () => {
    return (
        <>
            <div className={styles.alllogos} >
                <img src='html.png' />
                <img src='css.png' />
                <img src="c.png" />
                <img src='c++.png' />
                <img src='bootstrap.png' />
                <img src='mongodb.png' />
                <img src='mysql.png' />
                <img src='nodejs.png' />
                <img src='python.png' />
                <img src='react.png' />
                <img src='redux.png' />
                <img src='typescript.png' />
                <img src='js.png' style={{ height: "73px" }} />
                <img src='nestjs.png' style={{ height: "96px" }} />
                <img src='material-ui.png' style={{ height: "96px" }} />
            </div>
        </>
    )
}

export default Logos;