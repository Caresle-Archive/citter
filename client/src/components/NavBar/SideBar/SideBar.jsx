import UserSection from './UserSection.jsx'
import SideBarNav from './SideBarNav.jsx'

const SideBar = ({ className, changePage }) => {

	return (
		<div id="sidebar" className={className}>
			<div>
				<img src="./profile.jpg" alt="User" />
				<UserSection />
			</div>
			<SideBarNav changePage={changePage} />
		</div>
	)
}

export default SideBar