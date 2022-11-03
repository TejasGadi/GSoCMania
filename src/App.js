import React, { useEffect, useRef } from 'react'

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import AnimateRoutes from './components/AnimateRoutes';
import NavBarHeader from './components/NavBarHeader';


const App = () => {

    return (
        <div className="">
            <NavBarHeader />
            <Router >
                <AnimateRoutes />
            </Router >
        </div>
    )
}


export default App
