import React from 'react';
import { Footer } from '../../components/landingPage/footer/Footer';
import { NavBar } from '../../components/landingPage/navBar/NavBar';
import useAppEffects from '../../hooks/useAppEffects';


export function LandingLayout(props) {

    const { children } = props;
    useAppEffects();


    return (
        <div>
            <NavBar />
            <div>
                {children}
            </div>
            <Footer />
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </div>
    )
}
