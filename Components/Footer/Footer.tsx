import React from 'react'
import styles from './Footer.module.sass'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.InfoWrapper}>
                <p className={styles.NameProject}>consoledotlook</p>

                <ul className={styles.AboutUs}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Отзывы</li>
                </ul>

                <ul className={styles.FAQ}>
                    <li>FAQ</li>
                    <li>Доставка</li>
                    <li>Оформление заказа</li>
                    <li>Оплата</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer