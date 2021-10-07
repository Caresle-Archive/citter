import LikeNotification from "./LikeNotification.jsx"
import './Notification.css'

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
		type: 'comment'
	},
	{
		type: 'follow',
		user: 'Username'
	}
]

const Notifications = () => {
	return (
		<div>
			{not.map((e, i) => {
				if (e.type === 'like') return <LikeNotification noti={e} />
				return <div>{e.type}</div>
			})}
		</div>
	)
}

export default Notifications