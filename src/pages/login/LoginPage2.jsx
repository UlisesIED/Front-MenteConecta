import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GiBrain, GiMaterialsScience } from "react-icons/gi";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

import { loginApi } from '../../api/user';
import { IconButton, InputForm } from '../../components/ui';
import { useAuth } from '../../hooks/useAuth';
import './LoginPage.css';


export function LoginPage() {
    const [select, setSelect] = useState(0);
    const [loading, setLoading] = useState(true);

    const selection = [
        <SelectLogin setSelect={setSelect} />,
        <LoginMenteConecta />
    ]

    return selection[select]
}

function SelectLogin(props) {

    const { setSelect } = props;
    const { auth } = useAuth()
    const navigate = useNavigate()

    const isLogged = () => {
        if (auth) navigate('/admin')
        else setSelect(1)
    }

    return (
        <div>
            <center><h3><b>¿A dónde quieres acceder?</b></h3></center>
            <br />
            <div className='conteiner-select'>
                <IconButton
                    text="Mente Conecta"
                    icon={<GiBrain />}
                    color="cadetblue"
                    size="xl"

                    onChangeMethod={() => isLogged()}
                />
                <a href='http://menteconecta.net/jupyterhub/'>
                    <IconButton
                        text="Jupyter Notebook"
                        icon={<GiMaterialsScience />}
                        color="cadetblue"
                        size="xl"
                    />
                </a>
            </div>
            <br />
            <br />
        </div>
    )
}

function LoginMenteConecta() {


}