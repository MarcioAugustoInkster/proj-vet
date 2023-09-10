import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar";

const BaseLayout = () => {
    return(
        <>
            <Navbar />
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

export default BaseLayout;
