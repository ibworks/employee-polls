const Login = ({ users, logInAs }) => {
    const handleChange = (e) => {
        const id = e.target.value;
        logInAs(id);
    }
    
    return (
        <>
            <h1>Pick a user to impersonate</h1>
            <div className="break"/>
            <select defaultValue="0" onChange={handleChange}>
                <option disabled value="0"> -- select an option -- </option>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
        </>
    )
};

export default Login;