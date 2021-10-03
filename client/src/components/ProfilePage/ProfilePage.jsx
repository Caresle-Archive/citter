import ProfileStats from "../SideBar/ProfileStats.jsx"
import './ProfilePage.css'

const ProfilePage = () => {
	return (
		<div>
			<div className="myprofile-container">
				<div className="myprofile-img-container">
					<img className="sidebar-profile-picture" src="./profile.jpg" alt="user" />
					<button className="btn-edit">Edit profile</button>
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