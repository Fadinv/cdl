import React, {useState} from 'react'
import styles from './ProductItem.module.sass'
import {sizeArrayType, sizeStateType} from '../../../types/types'

interface ProductItemProps {
    src: string
    title: string
    price: number
    isLiked?: boolean
    sizes: sizeArrayType
}

const ProductItem: React.FC<ProductItemProps> = ({
                                                     src,
                                                     title,
                                                     price,
                                                     isLiked,
                                                     sizes,
                                                 }) => {

    const likeClasses = [styles.Like]
    if (isLiked) {
        likeClasses.push(styles.Liked)
    }

    const [sizeState, useSizeState] = useState<sizeStateType>(null)

    const likeHandler = (e) => {
        e.preventDefault()

        /* Проверка на наличие проводится при рендере */
        e.target.classList.toggle(styles.Liked)
    }

    const sizeClkHandler = (e) => {
        useSizeState(e.target.dataset.set)
    }

    const clickHandler = (e) => {
        e.preventDefault()
        const imgWidth = e.target.getBoundingClientRect().width
        const imgBoxWidth = e.target.parentNode.getBoundingClientRect().width
        if (imgWidth !== imgBoxWidth) {
            console.log('ПЕРЕХОДИМ ПО ССЫЛКЕ')
        }
    }

    const sizesBtn: sizeArrayType = ['xs', 's', 'm', 'l', 'xl', 'xxl']

    return (
        <div className={styles.ProductItem}>


            <div className={styles.HeightWrapperImageBox}>
                <div onClick={clickHandler} className={styles.ImageBox}>
                    <img className={styles.ProductImage} src={src} alt={''}/>
                </div>

                <button className={styles.WatchButton}>Подробнее...</button>

                <div className={styles.SizesStuck}>
                    {sizesBtn.map((btn, key) => {
                            const classesBtn = [styles.SizeStuckBtnItem]
                            if (!sizes.includes(btn)) {
                                classesBtn.push(styles.SizeDisabled)
                            } else if (sizeState === btn) {
                                classesBtn.push(styles.SizeActive)
                            }

                            return <button onClick={sizeClkHandler} key={key} data-set={btn}
                                           className={classesBtn.join(' ')}>
                                {btn}
                            </button>
                        },
                    )}
                </div>
            </div>

            <span onClick={likeHandler} className={likeClasses.join(' ')}>
                &#9825;
            </span>

            <div className={styles.OpacityBox}>
                <div className={styles.TextStuck}>
                    <p className={styles.ProductCathegory}>Майка</p>
                    <p className={styles.Title}>
                        {title}
                    </p>
                    <p className={styles.Price}>{price}р</p>
                </div>

                <div className={styles.StuckButtons}>
                    <button className={styles.AddCartBtn}>Добавить в корзину</button>

                    <button className={styles.BuyBtn}>Купить</button>
                </div>
            </div>

        </div>
    )
}

export default ProductItem