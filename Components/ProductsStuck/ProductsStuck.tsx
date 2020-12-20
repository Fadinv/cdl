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
                src={'/stuff/1-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/2-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/3-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/4-min.jpg'}/>


            <ProductItem
                title={'Майка такая'}
                price={1900}
                src={'/stuff/5-min.jpg'}/>

            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/6-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/7-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/8-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/9-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/10-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/11-min.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/12-min.jpg'}/>
        </div>
    )
}

export default ProductsStuck