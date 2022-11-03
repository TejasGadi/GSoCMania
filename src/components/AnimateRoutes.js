import React from 'react'
import Home from '../pages/Home'
import AboutMentors from '../pages/AboutMentors';
import { useLocation } from 'react-router-dom';

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"
import AboutGSOCMania from '../pages/AboutGSOCMania';
import Timeline from '../pages/Timeline';

const AnimateRoutes = () => {
    let location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/"
                    element={<Home />}
                />
                <Route path="/mentors"
                    element={<AboutMentors />}
                />
                <Route path="/aboutgsocmania"
                    element={<AboutGSOCMania />}
                />
                <Route path="/timeline"
                    element={<Timeline />}
                />
                <Route path="/bookticket"
                    element={<AboutMentors />}
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimateRoutes
