import React from 'react'
import styles from './MenuTogglePanelContainer.module.sass'

interface MenuTogglePanelContainerProps {

}

const MenuTogglePanelContainer: React.FC<MenuTogglePanelContainerProps> = () => {
    return (
        <ul className={styles.MenuTogglePanelContainer}>
           <li className={styles.Ref}>Доставка</li>
           <li className={styles.Ref}>Оформление заказа</li>
           <li className={styles.Ref}>Оплата</li>
           <li className={styles.Ref}>Контакты</li>
           <li className={styles.Ref}>Отзывы</li>
           <li className={styles.Ref}>понравившиеся</li>
           <li className={styles.PersonalArea}>Личный кабинет</li>
           <li className={styles.Phone}>8-925-62-62-341</li>
        </ul>
    )
}

export default MenuTogglePanelContainer