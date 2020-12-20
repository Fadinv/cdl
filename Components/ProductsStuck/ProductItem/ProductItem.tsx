import React from 'react'
import styles from './ProductItem.module.sass'
import Image from 'next/image'

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
                <div className={styles.ProductContainer}>
                    <Image
                        src={src}
                        alt={''}
                        width={3080}
                        height={3080}
                    />
                    {/*<img src={src} alt={''} />*/}

                    <div className={styles.TextStuck}>
                        <p className={styles.Title}>{title}</p>
                        <p className={styles.Price}>{price}р</p>
                    </div>
                </div>

                <div className={styles.StuckButtons}>
                    <button className={styles.AddCartBtn}>Добавить в корзину</button>
                    <button className={styles.BuyBtn}>Купить</button>
                </div>
            </div>
        )
    }

export default ProductItem