import { CaretDownIcon } from '@radix-ui/react-icons'
import ProfileStats from './ProfileStats.jsx'

const UserSection = () => {
	return (
		<>
			<div className="sidebar-profile-align">
				<span id="user1">Caresle</span>
				<span id="user2">@Caresle1</span>
				<CaretDownIcon id="sidebar-icon" />
			</div>
			<ProfileStats />
		</>
	)
}

export default UserSection