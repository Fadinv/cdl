import React, {useEffect, useRef} from 'react'
import styles from './ProductsStuck.module.css'
import ProductItem from './ProductItem/ProductItem'
import {data} from '../../data/__product__'
import {TypeProductRender} from '../../types/types'
import {getDataTypeProp, sortFunction} from '../../utils/removeElemetsOfArray'

interface ProductsStuckProps {
    numberVariantSortState: number
    setNumberVariantSortState: React.Dispatch<React.SetStateAction<number>>
    reversSortState: boolean
    setReversSortState: React.Dispatch<React.SetStateAction<boolean>>
    paginationState: number
    productStuckLoaded: boolean
    setProductStuckLoaded: React.Dispatch<React.SetStateAction<boolean>>
    typeProductRender: TypeProductRender
}

const ProductsStuck: React.FC<ProductsStuckProps> = ({
                                                         paginationState,
                                                         productStuckLoaded,
                                                         setProductStuckLoaded,
                                                         typeProductRender,
                                                         numberVariantSortState,
                                                         setNumberVariantSortState,
                                                         reversSortState,
                                                         setReversSortState,
                                                     }) => {

    const productStuckRef = useRef<HTMLDivElement>(null)
    const prop = getDataTypeProp(typeProductRender)
    const productsArray = data[prop]
    const renderArray = productsArray.slice(12 * paginationState, 12 + 12 * paginationState)

    sortFunction(productsArray, numberVariantSortState, reversSortState)

    useEffect(() => {
        if (productStuckLoaded) return
        productStuckRef.current.style.opacity = '1'
        setProductStuckLoaded(prev => !prev)
    })

    return (
        <div ref={productStuckRef} id={'productStuck'} className={styles.ProductsStuck}>

            {productStuckLoaded ? renderArray.map((pr, key) => <ProductItem
                id={pr.id}
                src={pr.src}
                title={pr.title}
                price={pr.price}
                isLiked={pr.isLiked}
                sizes={pr.sizes}
                key={key}
            />) : null
            }
        </div>
    )
}

export default ProductsStuck