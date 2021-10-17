import {
	PersonIcon,
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
				<div className="sidebar-flex-center sidebar-item">
					<QuestionMarkCircledIcon className="icon-big"/>
					<span>About</span>
				</div>
			</div>
		</>
	)
}

export default SideBarNav