import React from 'react'
import styles from './ProductPagination.module.sass'
import {data} from '../../data/__product__'
import {getDataTypeProp, scrollPage, setOpacityProductStuck} from '../../utils/removeElemetsOfArray'
import {TypeProductRender} from '../../types/types'

interface ProductPaginationProps {
    paginationState: number
    setPaginationState: React.Dispatch<React.SetStateAction<number>>
    setProductStuckLoaded: React.Dispatch<React.SetStateAction<boolean>>
    typeProductRender: TypeProductRender
}


const ProductPagination: React.FC<ProductPaginationProps> = ({
                                                                 paginationState,
                                                                 setPaginationState,
                                                                 setProductStuckLoaded,
                                                                 typeProductRender,
                                                             }) => {
    const paginationArray = []

    const prop = getDataTypeProp(typeProductRender)
    const paginationLength = Math.ceil(data[prop].length / 12)

    for (let i = 1; i <= paginationLength; i++) {
        paginationArray.push(i)
    }

    const paginationButtonClickHandler = (e) => {
        const changeTo = e.target.dataset.changeTo
        const timeout = 500

        switch (changeTo) {
            case 'prev':
                if (paginationState === 0) return
                setOpacityProductStuck(timeout)
                scrollPage()
                setTimeout(() => {
                    setProductStuckLoaded(false)
                    setPaginationState(prev => --prev)
                }, timeout)
                break
            case 'next':
                if (paginationState === paginationArray.length - 1) return
                setOpacityProductStuck(timeout)
                scrollPage()
                setTimeout(() => {
                    setProductStuckLoaded(false)
                    setPaginationState(prev => ++prev)
                }, timeout)
                break
            default:
                return
        }
    }

    const clickPaginationHandler = (e) => {
        e.preventDefault()
        const page = +e.target.dataset.page as number
        if (page - 1 === paginationState) return
        const timeout = 300
        setOpacityProductStuck(timeout)
        scrollPage()
        setTimeout(() => {
            setProductStuckLoaded(false)
            setPaginationState(page - 1)
        }, timeout)
    }

    return (
        <div className={styles.ProductPagination}>

            <ul className={styles.PaginationStuckNumber}>

                {paginationArray.map((page, key) => {
                    const classesBtn = [styles.PaginationNumberButton]
                    if (key === paginationState) {
                        classesBtn.push(styles.NumberButtonActive)
                    }

                    return <li key={key}>
                        <button data-page={page} onClick={clickPaginationHandler}
                                className={classesBtn.join(' ')}>{page}</button>
                    </li>
                })}
            </ul>
            <div className={styles.StuckButtons}>
                <button data-change-to={'prev'} onClick={paginationButtonClickHandler}
                        className={styles.BackButton}>Назад
                </button>
                <button data-change-to={'next'} onClick={paginationButtonClickHandler}
                        className={styles.NexButton}>Вперед
                </button>
            </div>

        </div>
    )
}

export default ProductPagination