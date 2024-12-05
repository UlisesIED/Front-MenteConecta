import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { GiBrain, GiMaterialsScience } from "react-icons/gi";

import { IconButton, InputForm } from '../../components/ui';
import './LoginPage.css';

export function LoginPage() {

    const [select, setSelect] = useState(0);

    const selection = [
        <SelectLogin setSelect={setSelect} />,
        <LoginMenteConecta />
    ]

    return selection[select]
}

function SelectLogin(props) {

    const { setSelect } = props;

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

                    onChangeMethod={() => setSelect(1)}
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
    return (
        <Form>
            <InputForm
                label="Usuario"
                labelDirection="center"
                nameInput="login"
                placeHolderInput="username"
                valueInput=""
                onChangeInput={(e) => console.log(e)}
                type="text"
                error=""
                touched=""
                size="sm"
                accept=""
            />
        </Form>
    )
}