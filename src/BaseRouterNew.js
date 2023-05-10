
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

/** import the base layout for the first module */
import BaseLayout from "./layouts/BaseLayout";
import ProfessionalLayout from "./layouts/ProfessionalLayout";
import Edit from "./pages/Edit";
import Profile from "./pages/Profile";
import HelpLayout from "./layouts/HelpLayout";
import Contact from "./pages/helps/Contact";
import Faq from "./pages/helps/Faq";
import NotFound from "./pages/NotFoud";


/** base router for the app new version of the router */
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={`/`} element={<BaseLayout />}>
                <Route index element={<Home />} />
                <Route path="about/" element={<About />} />
                <Route path={`help`} element={<HelpLayout />}>
                    <Route path={`faq`} element={<Faq />} />
                    <Route path={`contact`} element={<Contact />} />
                </Route>
            </Route>

            <Route path={`/professional/`} element={<ProfessionalLayout />}>
                <Route path={`profile/`} element={<Profile />} />
                <Route path={`edit/`} element={<Edit />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </>
    )
)

const BaseRouterNew = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}


export default BaseRouterNew;