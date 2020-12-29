import React from 'react'
import styles from './ProductNav.module.sass'
import {TypeProductRender} from '../../types/types'
import {scrollPage, setOpacityProductStuck} from '../../utils/removeElemetsOfArray'

interface ProductNavProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
    typeProductRender: TypeProductRender
    setTypeProductRender: React.Dispatch<React.SetStateAction<TypeProductRender>>
    setPaginationState: React.Dispatch<React.SetStateAction<number>>
    setProductStuckLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductNav: React.FC<ProductNavProps> = ({
                                                   menuTogglePanelState,
                                                   setMenuTogglePanelState,
                                                   typeProductRender,
                                                   setTypeProductRender,
                                                   setPaginationState,
                                                   setProductStuckLoaded,
                                               }) => {

    const pathArray: TypeProductRender[] = ['Майки', 'Поло', 'Толстовки']

    const buttonClickHandler = (e) => {
        const btn: TypeProductRender = e.target.dataset.set
        if (btn === typeProductRender) return
        let timeout = 350
        setOpacityProductStuck()

        scrollPage()
        setTimeout(() => {
            setPaginationState(0)
            setTypeProductRender(btn)
            setProductStuckLoaded(false)
        }, timeout)

    }

    const menuTogglePanelHandler = (e) => {
        setMenuTogglePanelState(prev => !prev)
    }

    return (
        <div className={styles.ProductNav}>

            <div className={styles.WrapperPathBtn}>
                <button onClick={menuTogglePanelHandler} className={styles.Menu}>
                    &#9776;
                </button>
                <div>
                    {pathArray.map((btn, key) => {
                        const classesBtn = [styles.Path]
                        if (btn === typeProductRender) {
                            classesBtn.push(styles.PathActive)
                        }
                        return (
                            <button data-set={btn}
                                    onClick={buttonClickHandler}
                                    className={classesBtn.join(' ')}
                                    key={key}
                            >
                                {btn}
                            </button>)
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductNav