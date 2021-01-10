import React from 'react'
import styles from './NavBar.module.sass'

interface NavBarProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar: React.FC<NavBarProps> = ({menuTogglePanelState, setMenuTogglePanelState}) => {

    const userButtonClickHandler = () => {
        setMenuTogglePanelState(true)
        const userButton = document.getElementById('userButton')
        userButton.click()
    }

    const helpButtonClickHandler = () => {
        setMenuTogglePanelState(true)
        const helpButton = document.getElementById('helpButton')
        helpButton.click()
    }

    return (
        <nav className={styles.NavBar}>

            <div className={styles.LogoBox}>
                <img className={styles.LogoImage} src={'/cdl__logo.svg'} alt={''}/>
                <span className={styles.CompanyName}>
                    cdlook
                </span>
            </div>

            <div className={styles.UserBar}>

                <button onClick={helpButtonClickHandler} className={styles.Help}>
                    Помощь
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button onClick={userButtonClickHandler} className={styles.User}>
                    <span className={styles.UserTitle}>Личный кабинет</span>
                    <img className={styles.UserImg} src={'/user.svg'} alt={''} />
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button className={styles.Cart}>
                    <p className={styles.MyCartText}>Моя корзина</p>
                    <div className={styles.CartBox}>
                        <span className={styles.CartNumber}>99</span>
                        <img className={styles.CartImage}
                             src='/shopping-cart.svg'
                             alt=''/>
                    </div>
                </button>

            </div>
        </nav>
    )
}

export default NavBar