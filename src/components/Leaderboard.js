import UserLabel from "./UserLabel";

const Leaderboard = ({ users = [] }) => {
    const rows = users
        .sort((a, b) => {
            const aRank = a.answers.length + (a.questions || []).length;
            const bRank = b.answers.length + (b.questions || []).length;
            
            return bRank - aRank;
        })
        .map((u) => (
            <tr key={u.id}>
                <td><UserLabel user={u} /></td>
                <td>{u.answers.length}</td>
                <td>{u.questions.length}</td>
            </tr>
        ));
    
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <table>
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
            </table>
        </div>);
};

export default Leaderboard;