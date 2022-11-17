const UserLabel = ({ user }) => {
    if (!user) return null;

    const avatar = user.avatarURL.length > 0
        ? (
            <img
                className="avatar-small"
                src={user.avatarURL}
                alt="Avatar" />)
        : null;
    return (
        <div className="user-label">
            { avatar }            
            <div className="user-label-name">
                <strong>{user.name}</strong>
                {user.id}
            </div>
        </div>);
};

export default UserLabel;