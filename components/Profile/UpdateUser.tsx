import {useState} from "react";
import {UpdateMode} from "../../utils/types.d";
import ChangePassword from "./ChangePassword.tsx";
import EditProfile from "./EditProfile.tsx";

interface LoginProps {
    login: string;
}

const UpdateUser = ({login}: LoginProps) => {
    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);

    switch (updateMode) {
        case UpdateMode.EDIT_PROFILE:
            return <EditProfile login={login} close={() => setUpdateMode(UpdateMode.DEFAULT)}/>;
        case UpdateMode.CHANGE_PASSWORD:
            return <ChangePassword close={() => setUpdateMode(UpdateMode.DEFAULT)}/>;
        default:
            return <div>
                <button onClick={() => setUpdateMode(UpdateMode.EDIT_PROFILE)}>Edit profile</button>
                <button onClick={() => setUpdateMode(UpdateMode.CHANGE_PASSWORD)}>Change password</button>
            </div>;
    }

};

export default UpdateUser;