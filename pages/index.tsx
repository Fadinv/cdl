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

export default function Home() {

    const [menuTogglePanelState, setMenuTogglePanelState] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        if (loaded) return
        setLoaded(prev => !prev)
    })

    return (
        <div className={styles.container}>
            {loaded ? <>
                <Head>
                    <title>consoledotlook</title>
                    <link rel="icon" href="../public/favicon.ico"/>
                </Head>

                <NavBar/>

                <MenuTogglePanel menuTogglePanelState={menuTogglePanelState}
                                 setMenuTogglePanelState={setMenuTogglePanelState}/>

                <ProductNav menuTogglePanelState={menuTogglePanelState}
                            setMenuTogglePanelState={setMenuTogglePanelState}/>


                <IndexWrapper>

                    <HelpPanel/>

                    <ProductsStuck/>

                    <ProductPagination/>
                </IndexWrapper>
                <Footer/>
            </> : null}
        </div>
    )
}


