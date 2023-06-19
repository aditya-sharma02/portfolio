import Link from "next/link";
import '@/app/page.module.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-text" style={{zIndex:1,}}>
                <div className="container-fluid" style={{zIndex:1,color:"pink"}}>
                    <Link className="navbar-brand ms-5 " style={{zIndex:1,color:"pink"}} href="/">Addissh</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-text" id="navbarNav">
                        <ul className="navbar-nav nav-text mx-auto" style={{ zIndex: 1, color: "pink" }}>
                            
                            <li className="nav-item">
                                <Link className="nav-link active" style={{zIndex:1,color:"pink"}} aria-current="page" href="/home">Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" style={{zIndex:1,color:"pink"}} href="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{zIndex:1,color:"pink"}} href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;