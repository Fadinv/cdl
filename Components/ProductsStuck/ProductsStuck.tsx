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
                src={'/stuff/1.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/2.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/3.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/4.jpg'}/>


            <ProductItem
                title={'Майка такая'}
                price={1900}
                src={'/stuff/5.jpg'}/>

            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/6.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/7.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/8.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/9.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/10.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/11.jpg'}/>
            <ProductItem
                title={'Майка такая-то туда-сюда блаблабла'}
                price={1900}
                src={'/stuff/12.jpg'}/>
        </div>
    )
}

export default ProductsStuck