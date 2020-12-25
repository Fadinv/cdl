import React, {useState} from 'react'
import styles from './ProductNav.module.sass'

interface ProductNavProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductNav: React.FC<ProductNavProps> = ({menuTogglePanelState, setMenuTogglePanelState}) => {

    const [pathState, setPathState] = useState<number>(0)

    const pathArray: string[] = ['Майки', 'Поло', 'Толстовки']

    const buttonClickHandler = (e) => {
        const key = +e.target.dataset.set as number
        if (key === pathState) return

        setPathState(key)
    }

    const menuTogglePanelHandler = (e) => {
        setMenuTogglePanelState(prev => !prev)
    }

    return (
        <div className={styles.ProductNav}>
            <button onClick={menuTogglePanelHandler} className={styles.Menu}>
                &#9776;
            </button>

            <div className={styles.WrapperPathBtn}>
                {pathArray.map((btn, key) => {
                    const classesBtn = [styles.Path]
                    if (key === pathState) {
                        classesBtn.push(styles.PathActive)
                    }
                    return (
                        <button data-set={key}
                                onClick={buttonClickHandler}
                                className={classesBtn.join(' ')}
                                key={key}
                        >
                            {btn}
                        </button>)
                })}
            </div>
        </div>
    )
}

export default ProductNav