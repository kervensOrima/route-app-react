import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../pages/component/BreadCrumbs";

const BaseLayout = () => {

    return (
        <>
            <div className="base-layout">
                <header>
                    <nav>
                        <h1>Job Company</h1>
                        <NavLink to={``}>Home</NavLink>
                        <NavLink to={`/about/`} >About</NavLink>
                        <NavLink to={`/help/`} >Help</NavLink>
                        <NavLink to={`/carreers/`} >Carreers</NavLink>
                    </nav>
                </header>
                <BreadCrumbs />
            </div>

            <main>
                <Outlet />
            </main>

        </>
    )


}

export default BaseLayout;