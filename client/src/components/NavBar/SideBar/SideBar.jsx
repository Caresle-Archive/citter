import UserSection from './UserSection.jsx'
import SideBarNav from './SideBarNav.jsx'

const SideBar = ({ className, changePage, user }) => {
	return (
		<div id="sidebar" className={className}>
			<div>
				<img src="./profile.jpg" alt="User" />
				<UserSection user={user}/>
			</div>
			<SideBarNav changePage={changePage} />
		</div>
	)
}

export default SideBar