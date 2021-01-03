import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import React, {useEffect, useState} from 'react'
import NavBar from '../Components/NavBar/NavBar'
import ProductNav from '../Components/ProductNav/ProductNav'
import ProductsStuck from '../Components/ProductsStuck/ProductsStuck'
import ProductPagination from '../Components/ProductPagination/ProductPagination'
import Footer from '../Components/Footer/Footer'
import IndexWrapper from '../Components/IndexWrapper/IndexWrapper'
import HelpPanel from '../Components/HelpPanel/HelpPanel'
import MenuTogglePanel from '../Components/MenuTogglePanel/MenuTogglePanel'
import {TypeProductRender} from '../types/types'
import ContactPanel from '../Components/ContactPanel/ContactPanel'


export default function Home() {
    const [loaded, setLoaded] = useState<boolean>(false)
    const [productStuckLoaded, setProductStuckLoaded] = useState<boolean>(false)

    const [menuTogglePanelState, setMenuTogglePanelState] = useState<boolean>(false)

    const [paginationState, setPaginationState] = useState<number>(0)
    const [typeProductRender, setTypeProductRender] = useState<TypeProductRender>('Майки')

    const [numberVariantSortState, setNumberVariantSortState] = useState<number>(1)
    const [reversSortState, setReversSortState] = useState<boolean>(false)

    useEffect(() => {
        if (loaded) return
        setLoaded(prev => !prev)
    })

    let startX = null

    const touchEnd = (e) => {
        let endX = e.changedTouches[0].clientX
        if (startX - endX >= 50) {
            setMenuTogglePanelState(false)
        }
    }

    const touchStart = (e) => {
        startX = e.touches[0].clientX
    }

    return (
        <div onTouchStart={menuTogglePanelState ? touchStart : null}
             onTouchEnd={menuTogglePanelState ? touchEnd : null}
             className={styles.container}
        >
            {loaded ? <>
                <Head>
                    <title>consoledotlook</title>
                    <link rel="icon" href="../public/favicon.ico"/>
                </Head>

                <NavBar menuTogglePanelState={menuTogglePanelState}
                        setMenuTogglePanelState={setMenuTogglePanelState}/>


                <MenuTogglePanel menuTogglePanelState={menuTogglePanelState}
                                 setMenuTogglePanelState={setMenuTogglePanelState}/>

                <ProductNav setProductStuckLoaded={setProductStuckLoaded} setPaginationState={setPaginationState}
                            setTypeProductRender={setTypeProductRender}
                            typeProductRender={typeProductRender} menuTogglePanelState={menuTogglePanelState}
                            setMenuTogglePanelState={setMenuTogglePanelState}/>


                <IndexWrapper paginationState={paginationState} setPaginationState={setPaginationState}>

                    <HelpPanel setProductStuckLoaded={setProductStuckLoaded} setReversSortState={setReversSortState}
                               reversSortState={reversSortState}
                               numberVariantSortState={numberVariantSortState}
                               setNumberVariantSortState={setNumberVariantSortState}/>

                    <ProductsStuck setReversSortState={setReversSortState} reversSortState={reversSortState}
                                   numberVariantSortState={numberVariantSortState}
                                   setNumberVariantSortState={setNumberVariantSortState}
                                   typeProductRender={typeProductRender} setProductStuckLoaded={setProductStuckLoaded}
                                   productStuckLoaded={productStuckLoaded} paginationState={paginationState}/>

                    <ProductPagination typeProductRender={typeProductRender}
                                       setProductStuckLoaded={setProductStuckLoaded} paginationState={paginationState}
                                       setPaginationState={setPaginationState}/>
                </IndexWrapper>

                <ContactPanel/>
                <Footer/>
            </> : null}
        </div>
    )
}


