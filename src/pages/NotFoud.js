import { NavLink, useNavigate } from "react-router-dom";


const NotFound = () => {

    const navigate = useNavigate()

    /**
     * 
     * @param {*} e 
     * go to the last page
     */
    const handleGoBack = (e) => {
        navigate(-1)
    }

    /**
     * 
     * @param {*} e 
     * go the previous page
     */
    const handleGoForhead = (e) => {
        navigate(1)
    }

    return (
        <>
            <div>
                <h2>Page not found!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias cupiditate ad nostrum doloribus iste tempora quisquam excepturi repellat, fugit cumque dolore magni possimus inventore neque provident! Sunt, quo eos?</p>
                <p>Go to the <NavLink to="/">Homepage</NavLink>. - <span onClick={(e) => (handleGoBack)}>Go to previous page</span> </p>
            </div>
        </>
    )
}


export default NotFound;