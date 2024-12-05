import React from 'react';
import { Form } from 'react-bootstrap';

import './InputForm.css';
export function InputForm(props) {

    const {
        label, labelDirection,
        nameInput, placeHolderInput,
        valueInput, onChangeInput,
        type, rows, error, touched,
        disabled, size, accept, col,
    } = props;


    return (
        <Form.Group className={col} >
            <Form.Label className={labelDirection}>{label}</Form.Label>
            <Form.Control
                className={`input-control ${labelDirection}`}
                name={nameInput}
                type={type}
                accept={accept}
                placeholder={placeHolderInput}
                rows={rows}
                value={valueInput}
                onChange={onChangeInput}
                disabled={disabled}
                size={size}
                style={{
                    borderColor: touched && error ? "red" : "#0f7ae6"
                }}
            />
            <Form.Text className="text-danger">
                {touched && error ?
                    <center><b><div className="text-danger">{error}</div></b></center>
                    : null}
            </Form.Text>
        </Form.Group>
    )
}
