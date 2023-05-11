import { useRouteError, Link } from "react-router-dom";


const ErrorCareer = () => {

    const error = useRouteError()

    return (
        <div className="career-error">
            <div className="careers-error">
                <h2>Error</h2>
                <p>{error.message}</p>
                <Link to="/">Back to the Homepage</Link>
            </div>

        </div>
    )
}

export default ErrorCareer;