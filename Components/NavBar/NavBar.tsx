import React from 'react'
import styles from './NavBar.module.sass'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className={styles.NavBar}>

            <div className={styles.LogoBox}>
                <img className={styles.LogoImage} src={'/cdl__logo.svg'} alt={''}/>
                <span className={styles.CompanyName}>
                    consoledotlook
                </span>
            </div>

            <div className={styles.UserBar}>

                <button className={styles.Help}>
                    Помощь
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button className={styles.User}>
                    Личный кабинет
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button className={styles.Cart}>
                    <p className={styles.MyCartText}>Моя корзина</p>
                    <div className={styles.CartBox}>
                        <span className={styles.CartNumber}>99</span>
                        <img className={styles.CartImage}
                             src='/cart.svg'
                             alt=''/>
                    </div>
                </button>

            </div>
        </nav>
    )
}

export default NavBar