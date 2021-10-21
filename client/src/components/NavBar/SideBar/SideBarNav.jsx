import {
	PersonIcon
} from '@radix-ui/react-icons'

const SideBarNav = ({ changePage }) => {
	
	return (
		<>
			<div>
				<div onClick={changePage("profile")} className="sidebar-flex-center sidebar-item">
					<PersonIcon className="icon-big"/>
					<span>Profile</span>
				</div>
			</div>
		</>
	)
}

export default SideBarNav