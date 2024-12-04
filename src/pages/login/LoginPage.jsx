import React, { useState } from 'react';
import { GiBrain, GiMaterialsScience } from "react-icons/gi";
import { IconButton } from '../../components/ui';

import './LoginPage.css';

export function LoginPage() {

    const [select, setSelect] = useState(0);

    const selection = [
        <SelectLogin setSelect={setSelect} />,
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
                <a href=''>

                </a>
                <IconButton
                    text="Jupyter Notebook"
                    icon={<GiMaterialsScience />}
                    color="cadetblue"
                    size="xl"
                />
            </div>
            <br />
            <br />
        </div>
    )
}
