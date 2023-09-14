import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../templates/BaseLayout";
import Home from "../pages/home/Home";
import NotFound from "../pages/not-found/NotFound";
import Contact from "../pages/contact/Contact";
import UserRegister from "../pages/account/register/UserRegister";
import SignIn from "../pages/account/signin/SignIn";
import AnimalEnroll from "../pages/account/enroll/AnimalEnroll";
import VetProfile from "../pages/profile-vet/VetProfile";
import About from "../pages/about/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contato', element: <Contact /> },
            { path: 'perfil-veterinario/:code', element: <VetProfile /> },
            { path: 'conta/cadastro', element: <UserRegister /> },
            { path: 'conta/login', element: <SignIn /> },
            { path: 'conta/matricula', element: <AnimalEnroll /> },
        ],
        errorElement: <NotFound />
    }
]);

export default routes;
