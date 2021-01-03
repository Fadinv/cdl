import React, {useRef, useState} from 'react'
import styles from './MenuTogglePanel.module.sass'
import {removeElementsOfArray} from '../../utils/removeElemetsOfArray'

interface MenuTogglePanelProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuTogglePanel: React.FC<MenuTogglePanelProps> = ({menuTogglePanelState, setMenuTogglePanelState}) => {

    const [reverseState, setReverseState] = useState<number>(0)
    const [animateState, setAnimateState] = useState<boolean>(false)
    const [userEntryState, setUserEntryState] = useState<number>(0)

    const helpContainerRef = useRef<HTMLUListElement>(null)
    const userContainerRef = useRef<HTMLUListElement>(null)

    const arrayHeaderMenu = ['Помощь', 'Личный кабинет']

    const arrayOfUserEntryPanel = ['Войти', 'Регистрация']

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

        const liElements = helpContainerRef.current.children
        const user = userContainerRef.current

        if (typeButton === 'Помощь') {
            if (reverseState === 0) return
            bool = true
            setReverseState(prev => --prev)
            setAnimateState(true)
            user.classList.remove(styles.UserContainerIsOpen)
            user.style.display = 'none'
            user.style.opacity = '0'
        } else if (typeButton === 'Личный кабинет') {
            if (reverseState === 1) return
            if (animateState) {
                user.classList.remove(styles.UserContainerIsOpen)
            }
            setReverseState(prev => ++prev)
            user.style.display = 'block'
            user.style.opacity = '0'
        }

        removeElementsOfArray(liElements, user, () => {
            setAnimateState(false)
        }, liElements.length - 1, bool)
    }

    const userEntryStateHandler = (e) => {
        const key: number = +e.target.dataset.key
        if (key === userEntryState) return

        const lastLiElement = userContainerRef.current.children[userEntryState] as HTMLOListElement
        const lastDivElement = lastLiElement.lastElementChild as HTMLDivElement
        const lastSpanElement = lastLiElement.firstElementChild as HTMLSpanElement

        lastLiElement.style.height = lastLiElement.getBoundingClientRect().height + 'px'
        lastLiElement.style.height = lastSpanElement.getBoundingClientRect().height + 1 + 'px'

        const li = e.target.parentNode
        const div = e.target.nextElementSibling

        li.style.height = lastSpanElement.getBoundingClientRect().height + 1 + 'px'
        li.style.height = lastLiElement.getBoundingClientRect().height + 'px'
        div.style.display = 'flex'

        setTimeout(() => {
            lastLiElement.style.height = 'auto'
            lastDivElement.style.display = 'none'
            li.style.height = 'auto'
            setUserEntryState(key)
        },300)
    }

    return (
        <>
            <div className={classesMenuTogglePanel.join(' ')}>
                <div className={styles.HeaderMenu}>
                    {/*Рендер кнопок "Помощь" и "Личный кабинет"*/}
                    {arrayHeaderMenu.map((btn, key) => {
                        const classesButton = [styles.HeaderMenuButton]

                        if (reverseState === key) {
                            classesButton.push(styles.HeaderMenuButtonIsActive)
                        }
                        return (
                            <button
                                id={btn === 'Личный кабинет' ? 'userButton' : 'helpButton'}
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
                        <li className={styles.HelpLine}><span className={styles.LiTitle}>Доставка</span></li>
                        <li className={styles.HelpLine}><span className={styles.LiTitle}>Оформление заказа</span></li>
                        <li className={styles.HelpLine}><span className={styles.LiTitle}>Оплата</span></li>
                    </ul>
                    <ul ref={userContainerRef} className={styles.UserContainer}>
                        {arrayOfUserEntryPanel.map((title, key) => {
                            return (
                                <li key={key} className={styles.HelpLine}>
                                    <span className={styles.LiTitle} data-key={key} onClick={userEntryStateHandler}>{title}</span>
                                    <div style={userEntryState !== key ? {display: 'none'} : {}} className={styles.InputStuck}>
                                        <label className={styles.InputStuckLabel} htmlFor="Email">Почта</label>
                                        <input className={styles.InputStuckInput} type="email"/>
                                        <label className={styles.InputStuckLabel} htmlFor="Email">Пароль</label>
                                        <input className={styles.InputStuckInput} type="password"/>
                                        <div className={styles.StuckEntryButtons}>
                                            <button className={styles.ForgottenButton}>Забыли пароль?</button>
                                            <button className={styles.EntryOrRegisterButton}>{title}</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
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