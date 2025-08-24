import {useState} from "react";

interface EditProfileProps {
    close: () => void;
}

const EditProfile = ({close}: EditProfileProps) => {
    const [login, setLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setLogin('');
        setFirstName('');
        setLastName('');
    }

    function handleClickSave() {
        //TODO save
        alert(`Save ${firstName} ${lastName}`);
        close();
    }

    return (
        <>
            <label>Login:
                <input type="text"
                       onChange={(e) => setLogin(e.target.value)}
                       value={login}/>

            </label>
            <label>First name:
                <input type="text"
                       onChange={(e) => setFirstName(e.target.value)}
                       value={login}/>

            </label>
            <label>Last name:
                <input type="text"
                       onChange={(e) => setLastName(e.target.value)}
                       value={login}/>

            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    );
};

export default EditProfile;