import React from 'react'
import styles from './ProductsStuck.module.css'
import ProductItem from './ProductItem/ProductItem'
import {data} from '../../data/__product__'

interface ProductsStuckProps {

}

const ProductsStuck: React.FC<ProductsStuckProps> = () => {

    return (
        <div className={styles.ProductsStuck}>
            {data.product.map((pr, key) => <ProductItem
                src={pr.src}
                title={pr.title}
                price={pr.price}
                isLiked={pr.isLiked}
                sizes={pr.sizes}
                key={key}
            />)}
        </div>
    )
}

export default ProductsStuck