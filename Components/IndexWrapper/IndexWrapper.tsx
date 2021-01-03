import React from 'react'
import styles from './IndexWrapper.module.sass'
import FlexColumn from '../GlobComponents/FlexColumn/FlexColumn'

interface IndexWrapperProps {
    paginationState: number
    setPaginationState: React.Dispatch<React.SetStateAction<number>>
}

const IndexWrapper: React.FC<IndexWrapperProps> = ({children, paginationState, setPaginationState}) => {
    let startX = null

    const touchStart = (e) => {
        startX = e.touches[0].clientX
    }

    const touchEnd = (e) => {
        let endX = e.changedTouches[0].clientX
        if (startX - endX >= 50) {
            let btn = document.getElementById('next')
            btn.click()
        }
        if (startX - endX <= -50) {
            let btn = document.getElementById('prev')
            btn.click()
        }
    }

    return (
        <div onTouchStart={touchStart} onTouchEnd={touchEnd} className={styles.IndexWrapper}>
            <FlexColumn>
                {children}
            </FlexColumn>

            <div className={styles.LeftLineBackground}>

            </div>

            <div className={styles.BackSideBackground}>

            </div>

        </div>
    )
}

export default IndexWrapper