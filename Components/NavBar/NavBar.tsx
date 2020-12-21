import React from 'react'
import styles from './NavBar.module.sass'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className={styles.NavBar}>

            <button className={styles.Menu}>
                &#9776; Menu
            </button>

            <div className={styles.UserBar}>

                <button className={styles.Help}>
                    Помощь
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button className={styles.User}>
                    Войти в личный кабинет
                    <div className={styles.hoverLine}>

                    </div>
                </button>

                <button className={styles.Cart}>
                    Моя корзина
                    <div className={styles.CartBox}>
                        <span className={styles.CartNumber}>99</span>
                        <img className={styles.CartImage}
                             src='/shopping-cart-25.png'
                             srcSet={'/shopping-cart-50.png 2x, /shopping-cart-100.png 4x'}
                             alt=''/>
                    </div>
                </button>

            </div>
        </nav>
    )
}

export default NavBar