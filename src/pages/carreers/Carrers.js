import { Link, useLoaderData } from "react-router-dom"

const Careers = () => {
    const data = useLoaderData()

    console.log(data)


    return <>
        <div className="carreers">
            {data.map(career => (
                <Link to={`${career.id}/`} key={`${career.id}`}>
                    <p> {career.title} </p>
                    <p> Career salary : {career.salary} </p>
                    <p> Career location: {career.location} </p>
                </Link>
            ))}
        </div>
    </>
}




export const loaderCarreers = async () => {
    const carreers = await fetch(`http://localhost:4000/careers/`)
    if (!carreers.ok) {
        throw new Error(`Error while communinicating with the backend!!`)
    }
    return carreers.json()
}


export default Careers;
