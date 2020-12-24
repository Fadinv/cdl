import React from 'react'
import styles from './ProductItem.module.sass'

interface ProductItemProps {
    src: string
    title: string
    price: number
}

const ProductItem: React.FC<ProductItemProps> =
    ({
         src,
         title,
         price,
     }) => {

        return (
            <div className={styles.ProductItem}>

                <div className={styles.ImageBox}>
                    <img className={styles.ProductImage} src={src} alt={''}/>
                </div>

                <div className={styles.OpacityBox}>

                    <div className={styles.TextStuck}>
                        <p className={styles.Title}>{title}</p>
                        <p className={styles.Price}>{price}р</p>
                    </div>

                    <div className={styles.StuckButtons}>
                        <button className={styles.AddCartBtn}>Добавить в корзину</button>
                        <button className={styles.WatchButton}>Посмотреть</button>
                        <button className={styles.BuyBtn}>Купить</button>
                    </div>
                </div>

            </div>
        )
    }

export default ProductItem