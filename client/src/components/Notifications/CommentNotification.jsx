import { ChatBubbleIcon } from '@radix-ui/react-icons'

const CommentNotification = ({ noti }) => {
	const { user } = noti
	return (
		<div className="card-notification">
			<div className="card-icons">
				<ChatBubbleIcon className="icon-small"/>
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

export default CommentNotification