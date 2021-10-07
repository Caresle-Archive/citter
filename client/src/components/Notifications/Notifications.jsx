import './Notification.css'
import LikeNotification from "./LikeNotification.jsx"
import ShareNotification from './ShareNotification'
import CommentNotification from './CommentNotification'
import FollowNotification from './FollowNotification'

const not = [
	{
		type: 'share',
		user: 'Username'
	},
	{
		type: 'like',
		user: 'Caresle'
	},
	{
		type: 'comment',
		user: 'Carelse'
	},
	{
		type: 'follow',
		user: 'Username'
	}
]

const Notifications = () => {
	return (
		<div className="notification-scroll">
			{not.map((e, i) => {
				if (e.type === 'share') {
					return (
						<ShareNotification 
							key={`share-notification-${i}`}
							noti={e}
						/>
					)
				}
				if (e.type === 'like') {
					return (
						<LikeNotification 
							key={`like-notification-${i}`}
							noti={e}
						/>
					)
				}
				if (e.type === 'comment') {
					return (
						<CommentNotification
							key={`comment-notification-${i}`}
							noti={e} 
						/>
					)
				}
				return (
					<FollowNotification
						key={`follow-notification-${i}`}
						noti={e}
					/>
				)
			})}
		</div>
	)
}

export default Notifications