import React, {useRef, useState} from 'react'
import styles from './HelpPanel.module.sass'

interface HelpPanelProps {

}

const HelpPanel: React.FC<HelpPanelProps> = () => {

    const variantsSortArray = ['цене', 'рейтингу', 'обновлению']

    const [numberVariantSortState, setNumberVariantSortState] = useState<number>(null)
    const [reversSortState, setReversSortState] = useState<boolean>(false)

    const stuckListRef = useRef<HTMLUListElement>(null)
    const togglePanelRef = useRef<HTMLDivElement>(null)
    const sortBarRef = useRef<HTMLDivElement>(null)

    const liClickHandler = (e) => {
        e.preventDefault()

        if (!e.target.parentNode) return

        const key = +e.target.dataset.key || +e.target.parentNode.dataset.key

        if (key === numberVariantSortState) {
            setReversSortState(prevState => !prevState)
            return
        }

        setReversSortState(false)
        setNumberVariantSortState(key)
    }

    const globSortBarClickHandler = (e) => {
        e.preventDefault()

        const div = togglePanelRef.current
        const ul = stuckListRef.current
        const t = e.target

        if (div === null || ul === null || t === null) {
            return
        }

        if (t === div || t.parentNode === div) {
            return
        }

        if (t === ul || t.parentNode === ul || t.parentNode.parentNode === ul) {
            return
        }

        ul.classList.remove(styles.Open)
        div.classList.remove(styles.TogglePanelIsOpen)

        window.removeEventListener('click', globSortBarClickHandler)
    }

    const sortBarClickHandler = (e) => {
        e.preventDefault()
        const ul = stuckListRef.current
        ul.classList.toggle(styles.Open)

        const div = togglePanelRef.current
        div.classList.toggle(styles.TogglePanelIsOpen)

        if (ul.classList.contains(styles.Open)) {
            window.addEventListener('click', globSortBarClickHandler)
        } else if (!ul.classList.contains(styles.Open)) {
            window.removeEventListener('click', globSortBarClickHandler)
        }
    }

    return (
        <div className={styles.HelpPanel}>
            <div>

            </div>

            <div ref={sortBarRef} className={styles.SortBar}>
                <div ref={togglePanelRef} className={styles.TogglePanel} onClick={sortBarClickHandler}>
                    <span className={styles.SortBarTitle}>Сортировать по</span>
                    <span className={styles.Arrow}>&#9660;</span>
                </div>

                <ul ref={stuckListRef} className={styles.StuckList}>
                    {variantsSortArray.map((variant, key) => {

                        const classesVariantSort = [styles.VariantName]
                        const classesArrow = [styles.Arrow]

                        if (++key === numberVariantSortState) {

                            classesVariantSort.push(styles.VariantNameIsSelected)

                            if (reversSortState) {
                                classesArrow.push(styles.ArrowRotate)
                            }
                        }

                        return (
                            <li data-key={key} onClick={liClickHandler} className={classesVariantSort.join(' ')}
                                key={key}>
                                <span>{variant}</span>
                                <span className={classesArrow.join(' ')}>&#11167;</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HelpPanel