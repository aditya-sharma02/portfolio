'use client';

import React from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/Projectcard";
import Navbar from "../components/navbar";
import styles from "@/app/styles/projects.module.css"
import Link from "next/link";
import data from "@/app/data/index"
import { useState } from "react";
import Animation1 from "../components/Animation1";

const page = () => {
    const [currdata, setcdata] = useState(data)
    var temp = [];
    const inputevent = (event) => {
        let value = event.target.value;
        let i = 0; let j = 0;
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < data[i].techused.length; j++){
                if (data[i].techused[j] == value) {
                    temp.push(data[i])
                }
            }
        }
        setcdata(temp);
        temp = [];
    }
    return (
        <>
            <Navbar />
            <div className={styles.body}>
            <Animation1/>
                <div className={styles.heading}>
                    projects
                </div>
                <div className={styles.belowheading}>
                    <div className={styles.l1} />
                    <div className={styles.l2} />
                </div>
                <div className={styles.option}>
                    <input onClick={inputevent} type="submit" value="React" className={styles.button} />
                    <input onClick={inputevent} type="submit" value="full-stack" className={styles.button} />
                    <input onClick={inputevent} type="submit" value="next.js" className={styles.button} />
                    <input onClick={inputevent} type="submit" value="nest.js" className={styles.button} />
                    <input onClick={inputevent} type="submit" value="django" className={styles.button} />
                    <input onClick={()=>{setcdata(data)}} type="submit" value="all" className={styles.button} />
                </div>
                <div className={styles.projects}>
                    {currdata.map((elem, id) => {
                        return <ProjectCard
                            key={id}
                            index={elem.id-1}
                            title={elem.title}
                            description={elem.description}
                        />
                    })}
                </div>


            </div>
            <Footer />
        </>
    )
}
export default page;