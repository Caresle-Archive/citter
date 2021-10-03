import { CaretDownIcon } from '@radix-ui/react-icons'

const UserSection = () => {
	return (
		<>
			<div className="sidebar-profile-align">
				<span id="user1">Caresle</span>
				<span id="user2">@Caresle1</span>
				<CaretDownIcon id="sidebar-icon" />
			</div>
			<div className="sidebar-social-stats">
				<div>
					24 <span>Siguiendo</span>
				</div>
				<div>
					19 <span>Seguidores</span>
				</div>
			</div>
		</>
	)
}

export default UserSection