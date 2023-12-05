import React from 'react';
import Head from "next/head";
import Header from "@/components/Header";
import CustomDrawer from "@/components/CustomDrawer";
import Footer from "@/components/Footer";
import Navigation from '@/components/Navigation';
import s from './Layout.module.css'
import navigationConfig from 'constants/navigation';


const Layout = ({ children = [], nodesUnderBg }) => {
    return (
        <>
            <Head>
                <title>Sokol Car</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main>
                <CustomDrawer navigationConfig={navigationConfig}/>
                <div className={s.container}>
                    <div className={s.secoundaryContainer}>
                        <Navigation navigationConfig={navigationConfig}/>
                        {nodesUnderBg}
                    </div>
                </div>
                {children}
            </main>
            <Footer />
        </>
    )
};

export default Layout;