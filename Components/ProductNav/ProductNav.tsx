import React from 'react'
import styles from './ProductNav.module.sass'

interface ProductNavProps {

}

const ProductNav: React.FC<ProductNavProps> = () => {
    return (
        <div className={styles.ProductNav}>
            <button className={styles.ref}>
                Майки
            </button>

            <button className={styles.ref}>
                Поло
            </button>

            <button className={styles.ref}>
                Толстовки
            </button>
        </div>
    )
}

export default ProductNav