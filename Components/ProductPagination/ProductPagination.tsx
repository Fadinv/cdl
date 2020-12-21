import React from 'react'
import styles from './ProductPagination.module.sass'

interface ProductPaginationProps {

}

const ProductPagination: React.FC<ProductPaginationProps> = () => {
    return (
        <div className={styles.ProductPagination}>

            <ul className={styles.PaginationStuckNumber}>
                <li>
                    <button className={styles.PaginationNumberButton + ' ' + styles.NumberButtonActive}>1</button>
                </li>
                <li>
                    <button className={styles.PaginationNumberButton}>2</button>
                </li>
                <li>
                    <button  className={styles.PaginationNumberButton}>3</button>
                </li>
            </ul>
            <div className={styles.StuckButtons}>
                <button className={styles.BackButton}>Назад</button>
                <button className={styles.NexButton}>Вперед</button>
            </div>

        </div>
    )
}

export default ProductPagination