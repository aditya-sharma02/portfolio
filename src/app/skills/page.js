"use client"
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import styles from "@/app/styles/skiils.module.css"
import Logos from "../components/logos";
import Animation1 from "../components/Animation1";
import { SiNestjs, SiBootstrap, SiMongodb, SiRedux, SiExpress, SiReactrouter, SiTypescript, SiDjango, SiTailwindcss, SiPython } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { DiMysql } from 'react-icons/di'
import { TbBrandNextjs, TbBrandCpp } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { useEffect, useState } from "react";

const Page = () => {
    const [state, setstate] = useState(1);
    return (
        <>
            <Navbar />
            <div className={styles.body}>
                {/* <Logos /> */}
                <Animation1 />
                <div className={styles.maindiv}>
                    <div className={styles.box1}>
                        <div className={styles.box11}>
                            Development
                        </div>
                    </div>
                    <div className={styles.box2} />
                    <div className={styles.box3}>

                        <div className={(state === 1) ? `${styles.active1}` : ""}>
                            <div className={styles.s1}>
                                <div className={styles.box31}>
                                    <FaHtml5 />
                                </div>
                                <div className={styles.box31}>
                                    <FaCss3Alt />
                                </div>
                                <div className={styles.box31}>
                                    <IoLogoJavascript />
                                </div>
                                <div className={styles.box31}>
                                    <SiBootstrap />
                                </div>
                                <div className={styles.box31}>
                                    <SiMongodb />
                                </div>
                                <div className={styles.box31}>
                                    <DiMysql />
                                </div>
                            </div>
                        </div>

                        <div className={(state === 2) ? `${styles.active2}` : ""}>
                            <div className={styles.s2}>
                                <div className={styles.box32}>
                                    <FaReact />
                                </div>
                                <div className={styles.box32}>
                                    <SiRedux />
                                </div>
                                <div className={styles.box32}>
                                    <SiReactrouter />
                                </div>
                                <div className={styles.box32}>
                                    <FaNodeJs />
                                </div>
                                <div className={styles.box32}>
                                    <SiExpress />
                                </div>
                                <div className={styles.box32}>
                                    <SiNestjs />
                                </div>
                            </div>
                        </div>

                        <div className={(state === 3) ? `${styles.active3}` : ""}>
                            <div className={styles.s3}>
                                <div className={styles.box33}>
                                    <TbBrandNextjs />
                                </div>

                                
                                <div className={styles.box33}>
                                    <SiTypescript />
                                </div>
                                <div className={styles.box33}>
                                    <SiDjango />
                                </div>
                                <div className={styles.box33}>
                                    <SiTailwindcss />
                                </div>
                                <div className={styles.box33}>
                                    <TbBrandCpp />
                                </div>
                                <div className={styles.box33}>
                                    <SiPython />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.scrollballs}>
                    <div onClick={() => {
                        setstate(1);
                    }} className={styles.ball1} />
                    <div onClick={() => { setstate(2) }} className={styles.ball2} />
                    <div onClick={() => { setstate(3) }} className={styles.ball3} />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Page;