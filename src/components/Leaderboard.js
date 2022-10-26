import UserLabel from "./UserLabel";

const Leaderboard = ({ users = [] }) => {
    const rows = users
        .sort((a, b) => b.rank - a.rank)
        .map((u) => (
            <tr key={u.id}>
                <td><UserLabel user={u} /></td>
                <td>{u.answers.length}</td>
                <td>{u.questions.length}</td>
            </tr>
        ));
    
    return (
        <table className="leaderboard">
            <thead>
                <tr>
                    <th className="user-label-column">Users</th>
                    <th>Answered</th>
                    <th>Created</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
        
};

export default Leaderboard;