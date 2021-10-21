import { CaretDownIcon } from '@radix-ui/react-icons'
import ProfileStats from './ProfileStats.jsx'

const UserSection = ({ user }) => {
	return (
		<>
			<div className="sidebar-profile-align">
				<span id="user1">{user.username}</span>
				<span id="user2">@{user.username}</span>
				<CaretDownIcon id="sidebar-icon" />
			</div>
			<ProfileStats />
		</>
	)
}

export default UserSection