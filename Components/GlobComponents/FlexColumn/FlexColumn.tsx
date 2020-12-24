import React, {HTMLAttributes} from 'react'
import styles from './FlexColumn.module.sass'

type FlexColumnProps = HTMLAttributes<HTMLDivElement>

const FlexColumn: React.FC<FlexColumnProps> = ({children, ...props}) => {
    return (
        <div className={styles.FlexColumn}>
            {children}
        </div>
    )
}

export default FlexColumn