import ProfileStats from "../NavBar/SideBar/ProfileStats.jsx"

const ProfilePage = ({ className }) => {
	return (
		<div>
			<div className={className}>
				<div className="myprofile-img-container">
					<img className="sidebar-profile-picture" src="./profile.jpg" alt="user" />
					<button>Edit profile</button>
				</div>
				<h3>Caresle</h3>
				<h4>@Caresle1</h4>
				<p>Description</p>
				<ProfileStats />
			</div>
		</div>
	)
}

export default ProfilePage