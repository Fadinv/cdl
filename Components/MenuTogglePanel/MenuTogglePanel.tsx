import React, {useRef, useState} from 'react'
import styles from './MenuTogglePanel.module.sass'
import {removeElementsOfArray} from '../../utils/removeElemetsOfArray'

interface MenuTogglePanelProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuTogglePanel: React.FC<MenuTogglePanelProps> = ({menuTogglePanelState, setMenuTogglePanelState}) => {

    const [reverseState, setReverseState] = useState<number>(0)

    const helpContainerRef = useRef<HTMLUListElement>(null)
    const userContainerRef = useRef<HTMLUListElement>(null)

    const arrayHeaderMenu = ['Помощь', 'Личный кабинет']

    const classesMenuTogglePanel = [styles.MenuTogglePanel]
    if (menuTogglePanelState) {
        classesMenuTogglePanel.push(styles.MenuTogglePanelIsOpen)
    }

    const menuTogglePanelStateHandler = (e) => {
        setMenuTogglePanelState(prev => !prev)
    }

    const UserButtonClickHandler = (e) => {
        const typeButton = e.target.dataset.typeButton
        let bool = false
        if (typeButton === 'Помощь') {
            if (reverseState === 0) return
            bool = true
            setReverseState(prev => --prev)
        }

        if (typeButton === 'Личный кабинет') {
            if (reverseState === 1) return
            setReverseState(prev => ++prev)
        }

        const liElements = helpContainerRef.current.children
        const user = userContainerRef.current

        removeElementsOfArray(liElements, user, liElements.length - 1, bool)
    }

    return (
        <>
            <div className={classesMenuTogglePanel.join(' ')}>
                <div className={styles.HeaderMenu}>
                    {arrayHeaderMenu.map((btn, key) => {
                        const classesButton = [styles.HeaderMenuButton]
                        if (reverseState === key) {
                            classesButton.push(styles.HeaderMenuButtonIsActive)
                        }
                        return (
                            <button
                                key={key}
                                data-type-button={`${btn}`}
                                onClick={UserButtonClickHandler}
                                className={classesButton.join(' ')}
                            >
                                {btn}
                            </button>
                        )
                    })}
                    <button onClick={menuTogglePanelStateHandler} className={styles.CloseButton}>Х</button>
                </div>
                <div className={styles.StuckRef}>
                    <ul ref={helpContainerRef} className={styles.HelpContainer}>
                        <li className={styles.HelpLine}>Доставка</li>
                        <li className={styles.HelpLine}>Оформление заказа</li>
                        <li className={styles.HelpLine}>Оплата</li>
                    </ul>
                    <ul ref={userContainerRef} className={styles.UserContainer}>
                        <li className={styles.HelpLine}>Войти</li>
                        <li className={styles.HelpLine}>Регистрация</li>
                    </ul>
                </div>
            </div>
            {menuTogglePanelState ?
                <div onClick={menuTogglePanelStateHandler} className={styles.BackDrop}>

                </div>
                : null}
        </>
    )
}

export default MenuTogglePanel