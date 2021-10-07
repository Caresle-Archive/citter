import { PersonIcon } from "@radix-ui/react-icons"

const FollowNotification = ({ noti }) => {
	const { user } = noti
	return (
		<div className="card-notification">
			<div className="card-icons">
				<PersonIcon className="icon-small"/>
				<img
					className="img-notification"
					src="./profile.jpg"
					alt="profile" 
				/>
			</div>
			<p className="notification-message">
				<span>{user}</span> Comment
			</p>
		</div>
	)
}

export default FollowNotification