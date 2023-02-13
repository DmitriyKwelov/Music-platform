import React, {FC} from 'react';
import Navbar from "@/components/Navbar";
import {ScriptProps} from "next/script";
import {Container} from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    children: any
    title?: string
    description?: string
    keywords?: string
}

const MainLayout: FC<MainLayoutProps> = ({children, title, description, keywords}) => {
    return (
        <>
            <Head>
                <title>{title || "Музыкальная платформа"}</title>
                <meta name="description" content={`Музыкальная платформа. Здесь каждый может оставить свой трек и стать популярным.` + description}/>
                <meta name="robots" content="index follow"/>
                <meta name="keyword" content={keywords || "Музыка, треки, артисты"}/>
                <meta name="viewport" content="width-device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{padding: '90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;