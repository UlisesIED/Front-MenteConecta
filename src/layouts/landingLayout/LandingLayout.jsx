import React from 'react';
import { Footer } from '../../components/landingPage/footer/Footer';
import { NavBar } from '../../components/landingPage/navBar/NavBar';

export function LandingLayout(props) {

    const { children } = props;

    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}
