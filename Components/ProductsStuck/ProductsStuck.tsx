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
                src={'/stuff/1-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/2-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/3-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/4-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая'}
                price={1900}
                src={'/stuff/5-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/6-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/7-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/8-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/9-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/10-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/11-500x500.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/12-500x500.jpg'}/>
        </div>
    )
}

export default ProductsStuck