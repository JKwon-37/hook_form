import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email, password};
        console.log("Welcome", newUser);
    }
    
    return (
        <div>

            <form onSubmit={createUser}>
                <div>
                    <label>Username:</label>
                    <input type="text" onChange={ (e) => setUsername(e.target.value)} value = {username} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} value = {email}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value)} value = {password}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                </div>
                <input type="submit" value="Create User"/>
            </form>

            <div>
                <p>
                    {username}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    {password}
                </p>
                <p>
                    {confirmPassword}
                </p>
            </div>
        </div>
    )
}

export default UserForm