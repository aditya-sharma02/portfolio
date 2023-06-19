import Image from 'next/image'
import styles from '@/app/styles/home.module.css'
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
