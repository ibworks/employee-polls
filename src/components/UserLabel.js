const UserLabel = ({ user }) => {
    if (!user) return null;

    return (
        <div className="user-label">
            <img
                className="avatar-small"
                src={user.avatarURL}
                alt="Avatar" />
            <div className="user-label-name">
                <strong>{user.name}</strong>
                {user.id}
            </div>
        </div>);
};

export default UserLabel;