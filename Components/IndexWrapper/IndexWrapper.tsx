import React from 'react'
import styles from './IndexWrapper.module.sass'
import FlexColumn from '../GlobComponents/FlexColumn/FlexColumn'

interface IndexWrapperProps {

}

const IndexWrapper: React.FC<IndexWrapperProps> = ({children}) => {
    return (
        <div className={styles.IndexWrapper}>
            <FlexColumn>
                {children}
            </FlexColumn>

            <div className={styles.LeftLineBackground}>

            </div>

            {/*<div className={styles.MiddleBackSideBackground}>*/}
            {/**/}
            {/*</div>*/}

            <div className={styles.BackSideBackground}>

            </div>
        </div>
    )
}

export default IndexWrapper