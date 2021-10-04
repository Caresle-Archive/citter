import UserSection from './UserSection.jsx'
import SideBarNav from './SideBarNav.jsx'
import './SideBar.css'

const SideBar = ({ showProfile }) => {

	return (
		<div id="sidebar" className="sidebar-container">
			<div>
				<img className="sidebar-profile-picture" src="./profile.jpg" alt="User" />
				<UserSection />
			</div>
			<SideBarNav showProfile={showProfile} />
		</div>
	)
}

export default SideBar