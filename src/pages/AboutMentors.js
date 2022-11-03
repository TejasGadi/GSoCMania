import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt";

const AboutMentors = () => {
    return (
        <Section2
            id='section2'
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
            <h1>About Mentors</h1>
            <Cards>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                    <Card>
                        <ImageContainer>
                            <a href="https://ibb.co/h1f2pg9">
                                <Image src="https://i.ibb.co/jZR378f/adwait.jpg" alt="adwait" border="0" />
                            </a>
                        </ImageContainer>
                        <InfoContainer>
                            <Name class="name">Adwait Bhosale</Name>
                            <Detail class="detail">Selected for GSoC 2021 as a Participant with the Openmined Community</Detail>
                        </InfoContainer>
                    </Card>
                </Tilt>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                    <Card>
                        <ImageContainer>
                            <a href="https://ibb.co/tCZPZkw">
                                <Image src="https://i.ibb.co/ZTH1HtR/tejas.jpg" alt="tejas" border="0" />
                            </a>
                        </ImageContainer>
                        <InfoContainer>
                            <Name class="name">Tejas Gadi</Name>
                            <Detail class="detail">Selected for GSoC 2021 as a Participant with the Apertium Organisation </Detail>
                        </InfoContainer>
                    </Card>
                </Tilt>
            </Cards>
        </Section2>
    )
}

const Section2 = styled(motion.div)`
    background: #0e1123;
    color: #ffffff;
    h1{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 75vh;
    z-index: 0;
`;

const ImageContainer = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: 50%; 
    overflow: hidden;
`;

const Image = styled.img`
    width:16rem;
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Name = styled.p`
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1rem 0;
`;
const Detail = styled.p`
    color: rgb(223, 206, 206);
    font-size: 1.2rem; 
    padding: 0rem 2rem;
    text-align: center;
`;

const Cards = styled.div`
    margin-top: 2rem;
    z-index: 0;
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Card = styled.div`
    width: 27rem;
    height: 30rem;
    border: 2px solid white;
    box-shadow: 1px 1px 20px 3px white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default AboutMentors
