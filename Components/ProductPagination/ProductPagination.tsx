import React from 'react'
import styles from './ProductPagination.module.sass'

interface ProductPaginationProps {

}

const ProductPagination: React.FC<ProductPaginationProps> = () => {
    return (
        <div className={styles.ProductPagination}>
            pagination
        </div>
    )
}

export default ProductPagination