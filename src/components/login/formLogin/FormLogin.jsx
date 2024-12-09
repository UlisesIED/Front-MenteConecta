import { useFormik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { GiBrain, } from "react-icons/gi";
import * as Yup from "yup";

import { loginApi } from '../../../api/user';
import { useAuth } from '../../../hooks';
import { InputForm } from '../../ui';
import './FormLogin.css';

export function FormLogin() {
    const { login } = useAuth()


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(newSchema()),
        validateOnChange: false,
        onSubmit: async (formvalue) => {
            try {
                const response = await loginApi(formvalue);
                const { access } = response;
                login(access);
            } catch (error) {
                alert(error.message);
            }

        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <div>
                <center>
                    <GiBrain size={'3rem'} />
                    <br />
                    <br />
                </center>
            </div>
            <InputForm
                label="Usuario"
                labelDirection="center"
                nameInput="username"
                placeHolderInput="username"
                valueInput={formik.values.username}
                onChangeInput={formik.handleChange}
                type="text"
                error={formik.errors.username}
                touched={formik.touched.username}
                size="sm"
            />
            <InputForm
                label="Contraseña"
                labelDirection="center"
                nameInput="password"
                placeHolderInput="password"
                valueInput={formik.values.password}
                onChangeInput={formik.handleChange}
                type="text"
                error={formik.errors.password}
                touched={formik.touched.password}
                size="sm"
            />
            <div className='conteiner-select'>
                <Button type="submit">
                    Iniciar sesión
                </Button>
            </div>
        </Form>
    )
}

function initialValues() {
    return {
        username: "",
        password: "",
    };
}
function newSchema() {
    return {
        username: Yup
            .string("Ingrese su usuario")
            .required("Ingrese su usuario"),
        password: Yup
            .string("Ingrese su contraseña")
            .required("Ingrese su contraseña"),
    };
}
