import React, {useEffect, useRef, useState} from 'react'
import styles from './ProductItem.module.sass'
import {sizeArrayType, sizeStateType} from '../../../types/types'

interface ProductItemProps {
    id: number
    src: string
    title: string
    price: number
    isLiked?: boolean
    sizes: sizeArrayType
}

const ProductItem: React.FC<ProductItemProps> = ({
                                                     id,
                                                     src,
                                                     title,
                                                     price,
                                                     isLiked,
                                                     sizes,
                                                 }) => {

    const likeClasses = [styles.Like]

    const [likeState, setLikeState] = useState<boolean>(isLiked)

    if (isLiked) {
        likeClasses.push(styles.Liked)
    }
    useEffect(() => {
    })
    const likeRef = useRef<HTMLDivElement>(null)

    const [sizeState, useSizeState] = useState<sizeStateType>(null)

    const likeHandler = (e) => {
        e.preventDefault()

        /* Проверка на наличие проводится при рендере */
        const like = likeRef.current
        setLikeState(prev => !prev)
        like.classList.toggle(styles.Liked)
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
        <div key={id} className={styles.ProductItem}>
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

            <div ref={likeRef} onClick={likeHandler} className={likeClasses.join(' ')}>
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.81 58.74">
                    <path className="cls-1" d="M255.81,290.58" transform="translate(-219 -227.14)"/>
                    <path className="cls-1"
                          d="M286.71,233q-5.1-5.82-14.1-5.81a14,14,0,0,0-5.09,1,19.64,19.64,0,0,0-4.82,2.72q-2.22,1.71-3.83,3.21a42,42,0,0,0-3.06,3.19,40,40,0,0,0-3.05-3.19q-1.6-1.5-3.84-3.21a19.6,19.6,0,0,0-4.82-2.72,14,14,0,0,0-5.08-1q-9,0-14.1,5.81c-3.41,3.87-5.92,7.7-5.92,14.58,0,8.28,1.66,12.34,4.87,17.66,6.9,11.43,29.49,20.69,31.94,20.69s17.87-6.6,26.8-15.72c6.6-6.73,9.2-16,9.2-21.09Q291.81,238.77,286.71,233Zm-12.63,30.48c-4.46,6.16-16.65,15.23-18.27,15.23-2.07,0-14.17-8.8-18.51-14.24-3.73-4.66-5.68-10-5.68-14.08a18.17,18.17,0,0,1,.68-5.25,10.62,10.62,0,0,1,1.73-3.62,8.49,8.49,0,0,1,2.57-2.19,10.36,10.36,0,0,1,3-1.14,15.87,15.87,0,0,1,3.08-.29,7.91,7.91,0,0,1,3.53.94,15.32,15.32,0,0,1,3.48,2.35q1.59,1.41,2.73,2.64a26.28,26.28,0,0,1,1.89,2.27c.38.53.89,1.41,1.54,1.41s1.17-.88,1.55-1.41a26.28,26.28,0,0,1,1.89-2.27,36.79,36.79,0,0,1,2.72-2.64,15.32,15.32,0,0,1,3.48-2.35,7.94,7.94,0,0,1,3.53-.94,16.05,16.05,0,0,1,3.09.29,10.47,10.47,0,0,1,3,1.14,8.61,8.61,0,0,1,2.57,2.19,10.81,10.81,0,0,1,1.73,3.62,18.52,18.52,0,0,1,.68,5.25C280,254.46,277.84,258.25,274.08,263.43Z"
                          transform="translate(-219 -227.14)"/>
                </svg>
            </div>

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