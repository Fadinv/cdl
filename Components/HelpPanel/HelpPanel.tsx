import React, {useRef} from 'react'
import styles from './HelpPanel.module.sass'
import {setOpacityProductStuck} from '../../utils/removeElemetsOfArray'

interface HelpPanelProps {
    numberVariantSortState: number
    setNumberVariantSortState: React.Dispatch<React.SetStateAction<number>>
    reversSortState: boolean
    setReversSortState: React.Dispatch<React.SetStateAction<boolean>>
    setProductStuckLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

const HelpPanel: React.FC<HelpPanelProps> = ({
                                                 numberVariantSortState,
                                                 setNumberVariantSortState,
                                                 reversSortState,
                                                 setReversSortState,
                                                 setProductStuckLoaded,
                                             }) => {

    const variantsSortArray = ['обновлению', 'цене']

    const stuckListRef = useRef<HTMLUListElement>(null)
    const togglePanelRef = useRef<HTMLDivElement>(null)
    const sortBarRef = useRef<HTMLDivElement>(null)

    const liClickHandler = (e) => {
        e.preventDefault()

        if (!e.target.parentNode) return

        const key = +e.target.dataset.key || +e.target.parentNode.dataset.key
        const timeout = 300

        setOpacityProductStuck(timeout)

        setTimeout(() => {
            if (key === numberVariantSortState) {
                setReversSortState(prevState => !prevState)
                setProductStuckLoaded(false)
                return
            }
            setReversSortState(false)
            setNumberVariantSortState(key)
            setProductStuckLoaded(false)
        }, timeout)
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

                        if (++key === numberVariantSortState) {
                            classesVariantSort.push(styles.VariantNameIsSelected)

                            if (reversSortState) {
                                classesVariantSort.push(styles.ArrowRotate)
                            }
                        }

                        return (
                            <li data-key={key} data-check-arrow={'arrow'} onClick={liClickHandler}
                                className={classesVariantSort.join(' ')}
                                key={key}>
                                <div>{variant}</div>

                                <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 600 600">
                                    <polygon points="0 0 300 600 600 0 300 244.35 0 0"/>
                                </svg>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HelpPanel