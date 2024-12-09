import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {
    HeaderAdmin,
    LeftMenu,
} from '../../components/admin';
import { useAuth } from '../../hooks/useAuth';
import { LoginLayout } from '../../pages/login';
import './AdminLayout.css';

export function AdminLayout(props) {
    const { children } = props;
    const { auth } = useAuth()

    if (!auth || auth?.detail) return <LoginLayout />
    console.log(auth);



    return (
        <Container fluid className="admin-layout">
            <Row>
                <HeaderAdmin />
            </Row>
            <Row>
                <div className="divi">
                    <section className="layout-sidebar">
                        <LeftMenu />
                    </section>
                    <section className="layout-navbar">
                        <div className="layout-tablas">
                            <Row>{children}</Row>
                        </div>
                    </section>
                </div>
            </Row>
        </Container>
    )
}
