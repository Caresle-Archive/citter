import { DotsVerticalIcon } from '@radix-ui/react-icons'

const UserInfoHeader = ({ userData }) => {
	
	return (
		<div className="citter-message-user">
			<img className="img-profile" src="./profile.jpg" alt="profile" />
			<div className="citter-user-info">
				<div className="font-weight-big">{userData.name}</div>
				<span>{userData.username}</span>
				<span>{userData.time}</span>
			</div>
			<div className="background-icon-small">
				<DotsVerticalIcon className="icon-small" />
			</div>
		</div>
	)
}

export default UserInfoHeader