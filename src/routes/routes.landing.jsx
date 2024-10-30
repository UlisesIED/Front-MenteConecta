import { LandingLayout } from "../layouts/landingLayout/LandingLayout";
import {
    Home
} from '../pages/landing';

const routesLanding = [
    {
        path: "/",
        layout: LandingLayout,
        component: Home,
    }
]

export default routesLanding;