import Image from "next/image"
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css"

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="product" fill />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Jonn Doe" />
                    <label>Price</label>
                    <input type="number" name="price" placeholder="jonn@gmail.com" />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder="23" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder="red" />
                    <label>Size</label>
                    <input type="text" name="size" placeholder="New York" />
                    <label>Category</label>
                    <select id="cat" name="cat">
                        <option value="kitchen">Kitchen</option>
                        <option value="computers">Computers</option>
                    </select>
                    <label>Description</label>
                    <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                    <button type="submit" className={styles.button}>Update</button>
                </form>

            </div>
        </div>
    )
}

export default SingleProductPage