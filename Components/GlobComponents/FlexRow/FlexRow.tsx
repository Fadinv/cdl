import React from 'react'
import styles from './FlexRow.module.sass'

interface FlexRowProps {

}

const FlexRow: React.FC<FlexRowProps> = ({children}) => {
    return (
        <div className={styles.FlexRow}>
            {children}
        </div>
    )
}

export default FlexRow