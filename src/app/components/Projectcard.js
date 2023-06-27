import Link from "next/link";
import styles from "@/app/styles/components.module.css"

const ProjectCard = (props) => {
    return (
        <>
            
            <div className={styles.projectCard}>
                <Link href={`/projects/${props.index}`} style={{textDecoration:"none"}}>
                    <div className={styles.pname}>
                        {props.title}
                    </div>
                    <div className={styles.pdescription}>
                        {props.description}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProjectCard;