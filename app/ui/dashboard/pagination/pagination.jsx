import styles from "./pagination.module.css"

const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>PREVIOUS</button>
            <button className={styles.button} >NEXT</button>
        </div>
    );
}

export default Pagination