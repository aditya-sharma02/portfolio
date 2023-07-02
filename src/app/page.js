import styles from "@/app/page.module.css"
import Link from "next/link";
import IndexPage from "./components/Head";
import Head from "next/head";
const page = () => {
  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.html}>Html</div>
        <div className={styles.boots}>bootstrap</div>
        <div className={styles.type}>typescript</div>
        <div className={styles.js}>js</div>
        <div className={styles.nodejs}>node.js</div>
        <div className={styles.expressjs}>Express.js</div>
        <div className={styles.django}>Django</div>
        <div className={styles.css}>css</div>
        <div className={styles.c}>c</div>
        <div className={styles.cpp}>c++</div>
        <div className={styles.python}>.py</div>
        <div className={styles.mongodb}>mongodb</div>
        <div className={styles.nextjs}>next.js</div>
        <div className={styles.nestjs}>nest.js</div>
        <div className={styles.reactjs}>React.js</div>
        <div className={styles.mysql}>mysql</div>
        <div className={styles.redux}>redux</div>
        <div className={styles.tohomeButton}>
          <Link href='/home' className={styles.link}>Go to Home Page</Link>
        </div>
        <div className={styles.hline1}></div>
        <div className={styles.hline2}></div>
        <div className={styles.vline1}></div>
        <div className={styles.vline2}></div>
      </div>
    </>
  )
}
export default page;