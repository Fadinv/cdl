import React, {useState} from 'react'
import styles from './ProductPagination.module.sass'

interface ProductPaginationProps {

}

const ProductPagination: React.FC<ProductPaginationProps> = () => {

    const paginationArray = [1, 2, 3, 4, 5]

    const [paginationState, setPaginationState] = useState<number>(1)

    const paginationButtonClickHandler = (e) => {
        const changeTo = e.target.dataset.changeTo

        switch (changeTo) {
            case 'prev':
                if (paginationState === 1) return
                setPaginationState(prev => --prev)
                break
            case 'next':
                if (paginationState === paginationArray.length) return
                setPaginationState(prev => ++prev)
                break
            default:
                return
        }
    }

    const clickPaginationHandler = (e) => {
        e.preventDefault()
        const page = +e.target.dataset.page as number
        if (page === paginationState) return

        setPaginationState(page)
    }

    return (
        <div className={styles.ProductPagination}>

            <ul className={styles.PaginationStuckNumber}>

                {paginationArray.map((page, key) => {
                    const classesBtn = [styles.PaginationNumberButton]
                    if (page === paginationState) {
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