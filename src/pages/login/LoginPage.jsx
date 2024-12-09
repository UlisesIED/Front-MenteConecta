import React from 'react';
import { Link } from 'react-router-dom';

import { SelectLogin } from '../../components/login';
import './LoginLayout.css';

export function LoginLayout() {

    return (
        <div className='conteiner'>
            <div className='sub-conteiner'>
                <div>
                    <div>
                        <SelectLogin />
                    </div>
                    <div className='footer-text'>
                        <Link to="/">
                            <small><b>
                                Regresar
                            </b></small>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
