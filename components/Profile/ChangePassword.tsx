import {useState} from "react";

interface ChangePasswordProps {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        if (newPassword === confirmPassword) {
            //TODO save
            alert(`Save ${newPassword}`);
            close();
        } else {
            alert('Passwords do not match');
        }
    }

    function handleClickClear() {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <div>
            <label>Old password:
                <input type="password"
                       onChange={(e) => setOldPassword(e.target.value)}
                       value={oldPassword}/>
            </label>
            <label>New password:
                <input type="password"
                       onChange={event => setNewPassword(event.target.value)}
                       value={newPassword}/>
            </label>
            <label>Confirm password:
                <input type="password"
                       onChange={event => setConfirmPassword(event.target.value)}
                       value={confirmPassword}/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    );
};

export default ChangePassword;