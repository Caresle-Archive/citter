import { UpdateIcon } from '@radix-ui/react-icons'

const ShareNotification = ({ noti }) => {
	const { user } = noti
	return (
		<div className="card-notification">
			<div className="card-icons icon-share">
				<UpdateIcon className="icon-small"/>
				<img
					className="img-notification"
					src="./profile.jpg"
					alt="profile" 
				/>
			</div>
			<p className="notification-message">
				<span>{user}</span> Share the citter
			</p>
		</div>
	)
}

export default ShareNotification