'use client'
import React from "react";
import styles from "@/app/styles/components.module.css"
import { CgCloseR, CgMenu } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <div className={styles.nav}>
                <div className={openMenu ? `${styles.navnew}` : ""}>
                <div className={styles.p2}><div className={styles.item}>
                        <div className={styles.linknav} href='/skills' onClick={() => setOpenMenu(~openMenu)}><FontAwesomeIcon icon={faBars} /></div>
                    </div>
                    </div>
                    <div className={styles.p1}>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='/home' onClick={() => setOpenMenu(false)}>Home</Link>
                            <div className={styles.underline} />
                        </div>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='/about' onClick={() => setOpenMenu(false)}>About</Link>
                        </div>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='/projects' onClick={() => setOpenMenu(false)}>Projects</Link>
                        </div>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='/dropmessage' onClick={() => setOpenMenu(false)}>Contact</Link>
                        </div>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='/skills' onClick={() => setOpenMenu(false)}>Skills</Link>
                        </div>
                        <div className={styles.item}>
                            <Link className={styles.linknav} href='https://drive.google.com/file/d/1FoPmZy4MgDH2G9-9aOpbSQNgCuk0kOfH/view?usp=sharing' onClick={() => setOpenMenu(false)}>Resume</Link>
                        </div>
                    </div>
                    

                    {/* //nav icon */}
                    {/* <div className={styles['mobile-navbar-btn']}>
                    <CgMenu
                        name="menu-outline"
                        className={styles['mobile-nav-icon']}
                        onClick={() => setOpenMenu(true)}
                    />
                    <CgCloseR
                        name="close-outline"
                        className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                        onClick={() => setOpenMenu(false)}
                    />
                </div> */}
                </div>
            </div>
        </>
    )
}
export default Navbar;
// 'use client'

// import styles from "@/app/styles/components.module.css"
// import {CgCloseR, CgMenu} from "react-icons/cg";
// import Link from "next/link";
// import {useState} from "react";
// import React from "react";
// const Nav = () => {
//     const [openMenu, setOpenMenu] = useState(false);
//     console.log("value " + openMenu)
//     return (
//         <>
//             <nav className={styles.navbar}>
//                 <div className={openMenu ? `${styles.active}` : "" }>
//                     <ul className={styles.navbarList}>
//                         <li className={styles.navbarItem}>
//                             <Link className={styles.navbarLink} href="#"
//                                   onClick={() => setOpenMenu(false)}
//                             >Home</Link>
//                         </li>
//                         <li className={styles.navbarItem}>
//                             <Link className={styles.navbarLink} href="/about"
//                                   onClick={() => setOpenMenu(false)}
//                             >About</Link>
//                         </li>
//                         <li className={styles.navbarItem}>
//                             <Link className={styles.navbarLink}
//                                   onClick={() => setOpenMenu(false)}
//                                   href="/projects">Movie</Link>
//                         </li>
//                         <li className={styles.navbarItem}>
//                             <Link className={styles.navbarLink}
//                                   onClick={() => setOpenMenu(false)}
//                                   href="/dropmessage">Contact</Link>
//                         </li>
//                         <li className={styles.navbarItem}>
//                             <Link className={styles.navbarLink}
//                                   onClick={() => setOpenMenu(false)}
//                                   href="/skills">Contact</Link>
//                         </li>
//                     </ul>

//                     {/* //nav icon */}
//                     <div className={styles['mobile-navbar-btn']}>
//                         <CgMenu
//                             name="menu-outline"
//                             className={styles['mobile-nav-icon']}
//                             onClick={() => setOpenMenu(true)}
//                         />
//                         <CgCloseR
//                             name="close-outline"
//                             className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
//                             onClick={() => setOpenMenu(false)}
//                         />
//                     </div>
//                 </div>
//             </nav>

//         </>

//     );
// };

// export default Nav;