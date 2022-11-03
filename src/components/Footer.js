// import { Facebook, Instagram, LinkedIn, Twitter, Room, Phone, MailOutline } from '@material-ui/icons';
// import React, { useState } from 'react'
// import styled from 'styled-components'
// import Cursor from './Cursor';

// const Footer = () => {

//     const [cursorX, setCursorX] = useState();
//     const [cursorY, setCursorY] = useState();

//     window.addEventListener('mousemove', (e) => {
//         setCursorX(e.pageX);
//         setCursorY(e.pageY);
//     })

//     return (
//         <Container>
//             <Left>
//                 <Logo>CSI.</Logo>
//                 <Desc>
//                     Follow us at all the social media platforms
//                 </Desc>
//                 <SocialContainer>
//                     <SocialIcon color="3B5999">
//                         <Facebook />
//                     </SocialIcon>
//                     <SocialIcon color="E4405F">
//                         <Instagram />
//                     </SocialIcon>
//                     <SocialIcon color="55ACEE">
//                         <LinkedIn />
//                     </SocialIcon>
//                     <SocialIcon color="E60023">
//                         <Twitter />
//                     </SocialIcon>
//                 </SocialContainer>
//             </Left>
//             <Right>
//                 <Title>Contact</Title>
//                 <ContactItem>
//                     <Room style={{ marginRight: "0.8rem" }} /> Vishwakarma Institute of Technology, Pune
//                 </ContactItem>
//                 <ContactItem>
//                     <Phone style={{ marginRight: "0.8rem" }} /> +91 123456789
//                 </ContactItem>
//                 <ContactItem>
//                     <MailOutline style={{ marginRight: "0.8rem" }} /> contact@tvg.developer
//                 </ContactItem>
//             </Right>
//         </Container>
//     )
// }

// const Container = styled.div`
//     z-index: 2;
//     position: absolute;
//     top: 100vh;
//     left: 0px;
//     width: 100vw;
//     min-height: 20vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #2b312f;
//     color: white;
//     margin: 0;
// `;
// const Left = styled.div`
//     flex:1;
//     display: flex;
//     flex-direction: column;
//     padding: 1.4rem;
//     `;
// const Centred = styled.div`
//     flex:1;
//     padding: 1.4rem;
//     `;
// const Right = styled.div`
//     flex:1;
//     padding: 1.4rem;
// `;
// const Logo = styled.h1`
   
// `;
// const Desc = styled.p`
//     margin: 1rem 0rem;
// `;
// const SocialContainer = styled.div`
//     display: flex;
// `;

// const SocialIcon = styled.div`
//     width: 3rem;
//     height: 3rem;
//     border-radius: 50%;
//     color: white;
//     background: #${props => props.color};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 1.5rem;
//     cursor: pointer;
//     transition: all 0.4s ease;
//     &:hover{
//         transform: scale(1.2);
//     }
// `;
// const Title = styled.h3`
//     margin-bottom: 1.3rem;
// `;
// const List = styled.ul`
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
//     `;
// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 0.8rem;
// `;

// const ContactItem = styled.div`
//     margin-bottom: 0.8rem;
//     display: flex;
//     justify-content: flex-start;
//     align-content: center;
// `;

// export default Footer
