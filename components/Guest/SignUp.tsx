import {useState} from "react";

const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
        setFirstName('');
        setLastName('');
    }
    const handleClickSignUp = () => {
        //TODO sign in
        alert(`Sign up ${firstName} ${lastName}`);
    }
    return (
        <>
            <label>Login:
                <input type="text"
                       onChange={(e) => setLogin(e.target.value)}
                       value={login}/>

            </label>
            <label>Password:
                <input type="password"
                       onChange={(e) => setPassword(e.target.value)}
                       value={password}/>
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
            <button onClick={handleClickSignUp}>Sign in</button>
            <button onClick={handleClickClear}>Clear</button>

        </>
    );
};

export default SignUp;