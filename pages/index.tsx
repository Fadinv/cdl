import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import ProductNav from '../Components/ProductNav/ProductNav'
import ProductsStuck from '../Components/ProductsStuck/ProductsStuck'
import ProductPagination from '../Components/ProductPagination/ProductPagination'
import Footer from '../Components/Footer/Footer'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>consoledotlook</title>
                <link rel="icon" href="../public/favicon.ico"/>
            </Head>

            <NavBar/>

            <ProductNav/>

            <ProductsStuck/>

            <ProductPagination/>

            <Footer/>

        </div>
    )
}
