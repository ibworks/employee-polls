const Login = ({ users, logInAs }) => {
    const handleChange = (e) => {
        const id = e.target.value;
        logInAs(id);
    }
    
    return (
        <select onChange={handleChange}>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
    )
};

export default Login;