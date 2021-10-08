import UserSection from './UserSection.jsx'
import SideBarNav from './SideBarNav.jsx'
import './SideBar.css'

const SideBar = ({ changePage }) => {

	return (
		<div id="sidebar" className="sidebar-container">
			<div>
				<img className="sidebar-profile-picture" src="./profile.jpg" alt="User" />
				<UserSection />
			</div>
			<SideBarNav changePage={changePage} />
		</div>
	)
}

export default SideBar