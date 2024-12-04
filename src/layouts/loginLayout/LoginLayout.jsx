import React from 'react';
import { Link } from 'react-router-dom';
import './LoginLayout.css';

export function LoginLayout(props) {

    const { children } = props;


    return (
        <div className='conteiner'>
            <div className='sub-conteiner'>
                <div>
                    <div>
                        {children}
                    </div>
                    <div className='footer-text'>
                        <Link to="/">
                            <small><b>
                                Inicio
                            </b></small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
