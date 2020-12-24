import React from 'react'
import styles from './ProductsStuck.module.sass'
import ProductItem from './ProductItem/ProductItem'

interface ProductsStuckProps {

}

const ProductsStuck: React.FC<ProductsStuckProps> = () => {

    return (
        <div className={styles.ProductsStuck}>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая1111'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/pngegg.png'}/>
        </div>
    )
}

export default ProductsStuck