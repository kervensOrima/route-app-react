
import { BrowserRouter, Routes, Route, NavLink, Link, LinkProps } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

const BaseRouter = () => {

    return <>
        <BrowserRouter>
            <header>
                <nav>
                    <h1>Job Company</h1>
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/about/`} >About</NavLink>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about/" element={<About />} />
                </Routes>
            </main>
        </BrowserRouter>
    </>

}

export default BaseRouter;