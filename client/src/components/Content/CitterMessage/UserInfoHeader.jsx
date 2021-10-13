import { DotsHorizontalIcon } from '@radix-ui/react-icons'

/**
 * Display the top info of the message
 * like profile name, username and the time
 * when the message was send
 */
const UserInfoHeader = ({ username, name }) => {

	return (
		<div className="citter-message-user">
			<img className="img-profile" src="./profile.jpg" alt="profile" />
			<div className="citter-user-info">
				<div className="font-weight-big">{name}</div>
				<span>@{username}</span>
				<span>time</span>
			</div>
			<DotsHorizontalIcon className="icon-small ml-3" />
		</div>
	)
}

export default UserInfoHeader