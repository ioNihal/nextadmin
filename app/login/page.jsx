import styles from "@/app/ui/login/loginPage.module.css"

const LoginPage = () => {
    return (
        <div className={styles.container} >
            <form action="" className={styles.form}>
                <h1>Logins</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage