import React from 'react'
import styled from 'styled-components'

const Cursor = ({ cursorX, cursorY, zIndexValue }) => {
    console.log(zIndexValue);
    return (
        <CursorContainer className='cursor' style={{ left: cursorX + 'px', top: cursorY + 'px', zIndex: { zIndexValue } }}>

        </CursorContainer>
    )
}

const CursorContainer = styled.div`
    width: 70px;
    height: 70px;
    background: #ffffff;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    mix-blend-mode: difference;
    transform: translate(-50%,-50%);
`

export default Cursor
