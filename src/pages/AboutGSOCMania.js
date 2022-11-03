import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const AboutGSOCMania = () => {
    return (
        <Section3
            id='section3'
            initial={
                {
                    height: "0vh",
                    opacity: 0,
                }
            }
            animate={
                {
                    height: "100vh",
                    opacity: 1,
                    transition: { duration: 0.6 }
                }
            }
            exit={
                {
                    height: "0vh",
                }
            }
        >
            <h1>About GSOC Mania</h1>
            <InfoContainer>
                Google summer of code is a global online program that brings new
                contributors into open-source software organizations. Gsoc is 12-week long program that runs from June to august every year. It was basically started in 2005 and was focused on university students to enter into open source.
                Since then, there has been 18000 plus contributors who have written 40 plus millions of lines of codes and there has been 746 open-source organizations from 112 different countries so it provides great opportunities and a lot of exposure to the new contributors.
            </InfoContainer>
        </Section3>
    )
}

const Section3 = styled(motion.div)`
    background: #0e1123;
    color: #ffffff;
    h1{
        font-size: 3.5rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    min-height: 50vh;
    width: 75%;
    padding: 2rem 5rem;
    font-size: 1.5rem;
    border-radius: 2rem;
    text-align: justify;
    /* background-color: rgba(255, 255, 255, 0.5);   */
    background-image:linear-gradient(60deg, rgba(255,255,255,.25) 80%, rgba(255,255,255,.3) 83%,rgba(255,255,255,.25) 86%, rgba(255,255,255,.45) 89%, rgba(255,255,255,.25));
    box-shadow:5px 5px 2px rgba(0,0,0,.25), 0px 0px 3px rgba(0,0,0,.5),-2px 3px 1px -1px rgba(255,255,255,.9), -2px -1px 1px -1px rgba(5,5,5,.9), 5px -5px 15px rgba(0,0,0,.5);
    backdrop-filter:blur(3px) saturate(.75) brightness(1.25);
    mix-blend-mode:hard-light;
    color:#ffffff;
    /* text-shadow:-1px -1px 0px rgba(0,0,0,.25),-1px 0px 0px rgba(0,0,0,.5),1px 1px 0px rgba(255,255,255,.25); */
`;



export default AboutGSOCMania
