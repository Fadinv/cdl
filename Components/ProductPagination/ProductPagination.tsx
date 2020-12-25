import React, {useState} from 'react'
import styles from './ProductPagination.module.sass'

interface ProductPaginationProps {

}

const ProductPagination: React.FC<ProductPaginationProps> = () => {

    const paginationArray = [1, 2, 3]

    const [paginationState, setPaginationState] = useState<number>(1)

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

                {/*<li>*/}
                {/*    <button className={styles.PaginationNumberButton + ' ' + styles.NumberButtonActive}>1</button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button className={styles.PaginationNumberButton}>2</button>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <button  className={styles.PaginationNumberButton}>3</button>*/}
                {/*</li>*/}
            </ul>
            <div className={styles.StuckButtons}>
                <button className={styles.BackButton}>Назад</button>
                <button className={styles.NexButton}>Вперед</button>
            </div>

        </div>
    )
}

export default ProductPagination