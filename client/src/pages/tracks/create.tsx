import React, {useState} from 'react';
import MainLayout from "@/layouts/MainLayout";
import StepWrapper from "@/components/StepWrapper";
import {Button, Grid} from "@mui/material";

const Create = () => {
    const [activeStep, setActiveStep] = useState(0)
    const next = () => {
        if(activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
    }
    const back = () => {
        setActiveStep(prev => prev - 1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <h1>STEP 1</h1>
                }
                {activeStep === 1 &&
                    <h1>STEP 2</h1>
                }
                {activeStep === 2 &&
                    <h1>STEP 3</h1>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;