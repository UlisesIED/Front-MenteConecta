import routesAdmin from './routes.admin';
import routesLanding from "./routes.landing";

const routes = [
    ...routesLanding,
    ...routesAdmin,
]

export default routes;