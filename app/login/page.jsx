import styles from "../ui/login/loginPage.module.css";
import LoginForm from "../ui/login/loginForm/loginForm";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;