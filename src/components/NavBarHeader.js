import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap';
import Cursor from './Cursor';

const NavBarHeader = () => {

    // States
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    const AnimateHamburger = ({ currentTarget }) => {
        const line1 = currentTarget.children[0];
        const line2 = currentTarget.children[1];

        const navlogo = currentTarget.parentNode.children[0].children[0];
        const navwindow = currentTarget.parentNode.parentNode.children[1];

        // Toggle hamburger icon
        if (!currentTarget.classList.contains("active")) {
            gsap.to(line1, { rotate: "45deg", y: "7px", background: "white", duration: 0.5 });
            gsap.to(line2, { rotate: "-45deg", y: "-7px", background: "white", duration: 0.5 });
            gsap.to(currentTarget, { color: "white", duration: 0.5 });
            gsap.to(navlogo, { color: "white", duration: 0.5 });

            gsap.to(navwindow, { clipPath: "circle(3000px at 100% -10%)", duration: 0.75 });
            currentTarget.classList.add("active");
            document.body.classList.add("hide");

        } else {
            gsap.to(line1, { rotate: "0deg", y: "0px", background: "white", duration: 0.5 });
            gsap.to(line2, { rotate: "0deg", y: "0px", background: "white", duration: 0.5 });
            gsap.to(currentTarget, { color: "white" });
            gsap.to(navlogo, { color: "white", duration: 0.5 });

            gsap.to(navwindow, { clipPath: "circle(50px at 100% -10%)", duration: 0.5 });
            currentTarget.classList.remove("active");
            document.body.classList.remove("hide");

        }
    }

    return (
        <div className="">
            <NavHeader>
                <a href="/" id="logo" style={{ textDecoration: "none" }}>
                    <Logo>
                        <img src="https://raw.githubusercontent.com/TejasGadi/csivitpunelogos/main/White%20logo%20CSI.svg" height={"50px"} alt="" />
                        <p>CSI VIT Pune</p>
                    </Logo>
                </a>
                <Hamburger onClick={AnimateHamburger}>
                    <Line1 class="line1" ></Line1>
                    <Line2 class="line2" ></Line2>
                </Hamburger>
            </NavHeader>
            <NavWindow class="nav-bar">
                <NavLinks class="nav-links">
                    <a href="/"><h3>Home</h3></a>
                    <a href="/aboutgsocmania"><h3>About GSOC Mania</h3></a>
                    <a href="https://pages.razorpay.com/pl_KbWga6Klhhljbi/view" target="_blank"><h3>Book Ticket</h3></a>
                    <a href="/mentors"><h3>Mentors</h3></a>
                    <a href="/timeline"><h3>Event Timeline</h3></a>
                </NavLinks>
                <StayInContact class="contact">
                    <h2>Stay in touch with CSI.</h2>
                    <p>Computer Society of India, also known as CSI is a body of computer professionals in India, a medium to exchange views and information , learn and share ideas. CSI aims to facilitate research, knowledge sharing, learning and career enhancement.
                        CSI Students Chapter, VIT Pune brings the platform for computer enthusiasts of tomorrow and to inspire, nurture and assist students to integrate into IT community.
                    </p>
                </StayInContact>
                <Cursor cursorX={cursorX} cursorY={cursorY} zIndexValue={2} />
            </NavWindow>
        </div >
    )
}

const NavHeader = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    /* background: #a0a0a066; */
    background: #000000cb;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    /* box-shadow: 3px 3px 2px 3px rgba(255, 255, 255, 0.2); */
`;

const NavWindow = styled.nav`
    z-index: 2;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    opacity: 1;
    clip-path: circle(50px at 100% -10%);
    -webkit-clip-path: circle(50px at 100% -10%);
    flex-wrap: wrap;
`;

const NavLinks = styled.ul`
    list-style: none;
    font-size: 1.5rem;
    /* flex: 1 1 35rem; */
    flex-basis: 30rem;
    border-right: 3px solid black;
    padding: 1rem;
    a{
        color:black;
        text-decoration: none;
        border-radius: 2rem;
    }  
    h3{
        border-radius: 2rem;
        font-weight: 500;
        padding: 0.5rem;
        text-align: center;
        background: #ffffff;
        color: #000;
        border: 2px solid black;
        margin: 1rem;
        transition: all 0.1s ease;
        :hover{
            background: #000000;
            color: white;
            transform: scale(0.98);
        }
    }
`;

const StayInContact = styled.div`
    flex-basis: 54rem;
    padding-right: 2rem;
    h2{
        padding: 2rem;
        font-size: 4rem;
        font-weight: 700;
        padding: 1rem 0rem;
    }
    p{
        text-align: justify;
        font-size: 1.5rem;
        line-height: 2.8rem;
        font-weight: 400;
    }
`;

// const Logo = styled.h1`
//     opacity: 1;
//     color: white;   
//     font-size: 2rem;
//     font-family: 'Abril Fatface', cursive;
//     margin-left: 5rem;
//     letter-spacing: 1px;
// `;
const Logo = styled.div`
    z-index: 2;
    margin-left: 5rem;
    display: flex;
    align-content: center;
    justify-content: center;
    p{
        margin-left: 8px;
        margin-top: 5px;
        text-align: center;
        opacity: 1;
        color: white; 
        font-family: 'Poppins', cursive;
        font-weight: 300;
        font-size: 1.5rem;
    }
`;
const Hamburger = styled.div`
    opacity: 1;
    margin-right: 5rem;
    cursor: pointer;
    pointer-events: all;
`;
const Line1 = styled.div`
    width: 2.5rem;
    height: 0.25rem;
    background: white;
    margin: 0.7rem;
    pointer-events: none;
`;
const Line2 = styled.div`
    width: 2.5rem;
    height: 0.25rem;
    background: white;
    margin: 0.7rem;
    pointer-events: none;
`;

export default NavBarHeader
