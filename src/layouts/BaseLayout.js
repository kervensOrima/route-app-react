import { NavLink, Outlet } from "react-router-dom";

const BaseLayout = () => {

    return (
        <>
            <div className="base-lyout">

                <header>
                    <nav>
                        <h1>Job Company</h1>
                        <NavLink to={`/`}>Home</NavLink>
                        <NavLink to={`/about/`} >About</NavLink>
                        <NavLink to={`/help/`} >Help</NavLink>
                    </nav>
                </header>
            </div>

            <main>
                <Outlet />
            </main>

        </>
    )


}

export default BaseLayout;