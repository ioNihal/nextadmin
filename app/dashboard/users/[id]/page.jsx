import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="userAvatar" fill />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Jonn Doe" />
                    <label>Email</label>
                    <input type="email" name="email" placeholder="jonn@gmail.com" />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="+12345678" />
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder="New York"></textarea>
                    <label>Is Admin?</label>
                    <select id="isAdmin" name="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active?</label>
                    <select id="isActive" name="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit" className={styles.button}>Update</button>
                </form>

            </div>
        </div>
    )
}

export default SingleUserPage