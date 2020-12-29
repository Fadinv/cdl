import React from 'react'
import styles from './Footer.module.sass'

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.InfoWrapper}>
                <p className={styles.NameProject}>consoledotlook</p>

                <ul className={styles.FAQ}>
                    <li className={styles.FooterTitle}>FAQ</li>
                    <li>Доставка</li>
                    <li>Оформление заказа</li>
                    <li>Оплата</li>
                </ul>

                <ul className={styles.AboutUs}>
                    <li className={styles.FooterTitle}>О нас</li>
                    <li>Контакты</li>
                    <li>Отзывы</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer