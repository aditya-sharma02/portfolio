"use client"
import { Loading, Grid } from "@nextui-org/react";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import styles from "@/app/styles/contact.module.css"
import Animation1 from "./components/Animation1";
export default function App() {
    return (<>
        <Navbar />
        <div className={styles.bodyk}>
            <div>
                <Grid.Container gap={2}>
                    <Grid>
                        <Loading type="points" />
                    </Grid>
                </Grid.Container>
            </div>
            <Animation1/>
        </div>

        <Footer />
    </>
    );
}
