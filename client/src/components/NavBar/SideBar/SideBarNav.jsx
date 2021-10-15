import {
	PersonIcon,
	GearIcon,
	QuestionMarkCircledIcon
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
			
			<div>
				<div className="sidebar-flex-center sidebar-item">
					<GearIcon className="icon-big"/>
					<span>Settings and privacy</span>
				</div>
				<div className="sidebar-flex-center sidebar-item">
					<QuestionMarkCircledIcon className="icon-big"/>
					<span>Help Center</span>
				</div>
			</div>
		</>
	)
}

export default SideBarNav