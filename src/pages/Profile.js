import React from "react";
import { MyContext } from "../layouts/ProfessionalLayout";


const Profile = () => {

    const name = React.useContext(MyContext)

    console.log(`value of name passing by context ${name}`)

    return (
        <div className="profile">
            <h1>Profile content bellow</h1>
        </div>
    )

}


export default Profile;