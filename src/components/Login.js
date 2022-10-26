const Login = ({ users, logInAs }) => {
    const handleChange = (e) => {
        const id = e.target.value;
        logInAs(id);
    }
    
    return (
        <>
            <h1>Pick a user to impersonate</h1>
            <div className="break"/>
            <select onChange={handleChange}>
                <option disabled selected value> -- select an option -- </option>
                {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
            </select>
        </>
    )
};

export default Login;