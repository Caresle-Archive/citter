import {
	PersonIcon,
	BookmarkIcon,
	HamburgerMenuIcon,
	GearIcon,
	QuestionMarkCircledIcon
} from '@radix-ui/react-icons'

const SideBarNav = ({ showProfile }) => {
	return (
		<>
			<div>
				<div onClick={showProfile} className="sidebar-flex-center">
					<PersonIcon className="icon-big"/>
					<span>Profile</span>
				</div>
				<div className="sidebar-flex-center">
					<HamburgerMenuIcon className="icon-big"/>
					<span>Lists</span>
				</div>
				<div className="sidebar-flex-center">
					<BookmarkIcon className="icon-big"/>
					<span>Bookmarks</span>
				</div>
			</div>
			
			<div>
				<div className="sidebar-flex-center">
					<GearIcon className="icon-big"/>
					<span>Settings and privacy</span>
				</div>
				<div className="sidebar-flex-center">
					<QuestionMarkCircledIcon className="icon-big"/>
					<span>Help Center</span>
				</div>
			</div>
		</>
	)
}

export default SideBarNav