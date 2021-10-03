import UserSection from './UserSection.jsx'
import SideBarNav from './SideBarNav.jsx'
import './SideBar.css'

const SideBar = () => {
	return (
		<div className="sidebar-container">
			<div>
				<img className="sidebar-profile-picture" src="./profile.jpg" alt="User" />
				<UserSection />
			</div>
			<SideBarNav />
		</div>
	)
}

export default SideBar