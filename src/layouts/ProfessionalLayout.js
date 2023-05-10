import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const MyContext = React.createContext()


const ProfessionalLayout = () => {

    const name = 'ORIMA Kervens here guys hello!@'

    return (
        <>
            <div className="base-lyout">
                <header>
                    <nav>
                        <h1>Professional name here</h1>
                        <NavLink to={`/professional/profile/`}>Profile</NavLink>
                        <NavLink to={`/professional/edit/`} >Edit</NavLink>
                    </nav>
                </header>
            </div>

            <main role="main" aria-label="main">
                <MyContext.Provider value={name}  >
                    <Outlet parentProps={`The value of the parents prop`} />
                </MyContext.Provider>
            </main>
        </>
    )
}


export default ProfessionalLayout;