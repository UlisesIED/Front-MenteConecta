import { LandingLayout } from '../layouts';
import { LoginLayout } from '../layouts/loginLayout/LoginLayout';
import {
    Home
} from '../pages/landing';
import {
    LoginPage
} from '../pages/login';

const routesLanding = [
    {
        path: '/',
        layout: LandingLayout,
        component: Home,
    },

    {
        path: '/login',
        layout: LoginLayout,
        component: LoginPage
    }
]

export default routesLanding;