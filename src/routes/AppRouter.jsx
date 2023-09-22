import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../templates/BaseLayout";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import Contact from "../pages/contact/Contact";
import UserRegister from "../pages/account/register/UserRegister";
import SignIn from "../pages/account/signin/SignIn";
import VetReport from "../pages/account/vet-report/VetReport";
import VetProfile from "../pages/profile-vet/VetProfile";
import About from "../pages/about/About";
import MobileInfo from "../pages/mobile-info/MobileInfo";
import ServiceInfo from "../pages/service-info/ServiceInfo";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'sobre', element: <About /> },
            { path: 'contato', element: <Contact /> },
            { path: 'mobilidade', element: <MobileInfo /> },
            { path: 'atendimento', element: <ServiceInfo /> },
            { path: 'perfil-veterinario/:code', element: <VetProfile /> },
            { path: 'conta/cadastro', element: <UserRegister /> },
            { path: 'conta/login', element: <SignIn /> },
            { path: 'conta/historico-consultas', element: <VetReport /> },
        ],
        errorElement: <NotFound />
    }
]);

export default routes;
