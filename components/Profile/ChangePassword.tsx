import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useChangePasswordMutation, useFetchUserQuery} from "../../features/api/accountApi.ts";
import {createToken} from "../../utils/constants.ts";
import {setToken} from "../../features/token/tokenSlice.ts";

interface ChangePasswordProps {
    close: () => void;
}

const ChangePassword = ({close}: ChangePasswordProps) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.token)
    const [changePassword] = useChangePasswordMutation();
    const {data} = useFetchUserQuery(token);

    const handleClickSave = async () => {
        if (newPassword === confirmPassword) {
            const token = createToken(data!.login, oldPassword);
            try {
                await changePassword({newPassword, token}).unwrap();
                dispatch(setToken(createToken(data!.login, newPassword)));
            } catch (e) {
                console.log("Change password error:", e);
            }


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