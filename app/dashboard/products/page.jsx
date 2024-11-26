import Pagination from "@/app/ui/dashboard/pagination/pagination"
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a products.." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addBtn}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src="/noproduct.jpg" alt="productImage" width={40} height={40} className={styles.productsImage} />
                                Iphone
                            </div>
                        </td>
                        <td>Description</td>
                        <td>$999</td>
                        <td>12.04.2023</td>
                        <td>72</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/dashboard/products/test">
                                    <button className={`${styles.button} ${styles.view}`} >VIEW</button>
                                </Link>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`} >DELETE</button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage