import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const addProductPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder="title" name="title" required />
                <select name="cat" id="cat">
                    <option value="general">Choose a category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" />
                <input type="number" placeholder="stock" name="stock" />
                <input type="text" placeholder="color" name="color" />
                <input type="text" placeholder="size" name="size" />
                <textarea name="desc" id="desc" rows="16" placeholder="Description..."></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
}

export default addProductPage;