import '../css/ProfileCard.css';

function ProfileCard(props) {
    const { user } = props;
    console.log(user);
    return (
        <div className="profile-container">
            <div className="info-user">
            <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
                <h3>{user.bio}</h3>
                <p>{user.public_repos} repositories</p>
            </div>
        </div>
    )
};

export default ProfileCard;
