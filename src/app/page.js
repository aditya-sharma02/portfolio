import styles from "@/app/page.module.css"
import Link from "next/link";
import IndexPage from "./components/Head";
import Head from "next/head";
import Animation1 from "./components/Animation1";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <div className={styles.body}>
        <div className={styles.porfoliodiv}>
          <div className={styles.portfolio}>
            portfolio...
          </div>
        </div>
        <div className={styles.developer}>
          developer
        </div>
        <div className={styles.coder}>
          coder
        </div>
        <div className={styles.psolver}>
          problem solver
        </div>
        <Animation1 />
        <div className={styles.btn}>
          <Link href='/home'>
            <FontAwesomeIcon icon={faArrowCircleRight} className={styles.arrow}></FontAwesomeIcon>
          </Link>
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