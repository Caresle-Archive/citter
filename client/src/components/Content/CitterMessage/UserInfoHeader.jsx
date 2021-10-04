import { DotsHorizontalIcon } from '@radix-ui/react-icons'

/**
 * Display the top info of the message
 * like profile name, username and the time
 * when the message was send
 */
const UserInfoHeader = ({ userData }) => {

	return (
		<div className="citter-message-user">
			<img className="img-profile" src="./profile.jpg" alt="profile" />
			<div className="citter-user-info">
				<div className="font-weight-big">{userData.name}</div>
				<span>{userData.username}</span>
				<span>{userData.time}</span>
			</div>
			<DotsHorizontalIcon className="icon-small ml-3" />
		</div>
	)
}

export default UserInfoHeader