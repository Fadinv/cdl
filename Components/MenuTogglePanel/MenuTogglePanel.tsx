import React from 'react'
import styles from './MenuTogglePanel.module.sass'

interface MenuTogglePanelProps {
    menuTogglePanelState: boolean
    setMenuTogglePanelState: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuTogglePanel: React.FC<MenuTogglePanelProps> = ({menuTogglePanelState, setMenuTogglePanelState}) => {

    const classesMenu = [styles.Menu]
    const classesMenuTogglePanel = [styles.MenuTogglePanel]
    if (menuTogglePanelState) {
        classesMenu.push(styles.MenuIsOpen)
        classesMenuTogglePanel.push(styles.MenuTogglePanelIsOpen)
    }

    const menuTogglePanelStateHandler = (e) => {
        setMenuTogglePanelState(prev => !prev)
    }

    return (
        <div className={classesMenuTogglePanel.join(' ')}>
            <div className={classesMenu.join(' ')}>
                <div className={styles.StickyBox}>
                    Ну епта
                </div>
            </div>

            {menuTogglePanelState ? <div onClick={menuTogglePanelStateHandler} className={styles.MenuBackground}>

            </div> : null}
        </div>
    )
}

export default MenuTogglePanel