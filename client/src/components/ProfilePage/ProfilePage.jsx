import ProfileStats from "../NavBar/SideBar/ProfileStats.jsx"

const ProfilePage = ({ className, user, changePage }) => {
	return (
		<div>
			<div className={className}>
				<div className="myprofile-img-container">
					<img className="sidebar-profile-picture" src="./profile.jpg" alt="user" />
					<button onClick={changePage("feed")}>Feed</button>
				</div>
				<div className="user-data">
					<h3>{user.username}</h3>
					<h4>@{user.username}</h4>
				</div>
				<p>Description</p>
				<ProfileStats />
			</div>
		</div>
	)
}

export default ProfilePage