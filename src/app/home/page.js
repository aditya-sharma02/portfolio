import Image from 'next/image'
import styles from "@/app/styles/home.module.css"
import Footer from '@/app/components/Footer'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        {/* animation  */}
        <div className={styles.linetiltsmallinvert}></div>
        <div className={styles.linetiltsmallinvert1}></div>

        <div className={styles.linetiltsmall1}></div>
        <div className={styles.linetiltsmall}></div>

        <div className={styles.linetilt}></div>
        
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div className={styles.circle4}></div>
        <div className={styles.deg45l1} />
        <div className={styles.deg45l2}/>
        {/* animation ends */}
        <div className={styles.homeGrid}>
          <div className={styles.intro}>
            <div className={styles.skill}>~ I am </div>
            <div className={styles.name}>Aditya Sharma</div>
            <div className={styles.skill}>Web Designer</div>
            <div className={styles.introdata}>I am aspiring Full stack Desiner , who allways wants to learn new technologies </div>
          </div>
          <div className={styles.logos}>
          </div>
        </div>
        <div className={styles.homelinev1}></div>
        <div className={styles.homelinev2}></div>
        
      </div>
      <Footer />

    </>
  )
}
