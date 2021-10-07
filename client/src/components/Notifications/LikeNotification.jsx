import { DoubleArrowUpIcon } from '@radix-ui/react-icons'

const LikeNotification = ({ noti }) => {
	const { user } = noti
	return (
		<div className="card-notification">
			<div className="card-icons icon-like">
				<DoubleArrowUpIcon className="icon-small"/>
				<img
					className="img-notification"
					src="./profile.jpg"
					alt="profile" 
				/>
			</div>
			<p className="notification-message">
				<span>{user}</span> Like notification
			</p>
		</div>
	)
}

export default LikeNotification