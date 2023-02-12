import React, {FC} from 'react';
import Navbar from "@/components/Navbar";
import {ScriptProps} from "next/script";
import {Container} from "@mui/material";

const MainLayout: FC<ScriptProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container style={{padding: '90px 0'}}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;