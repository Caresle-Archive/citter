import { 
	ChatBubbleIcon,
	UpdateIcon,
	DoubleArrowUpIcon,
	Share1Icon
} from '@radix-ui/react-icons'

const SocialMessageInfo = ({ social }) => {
	const comments = (social.comments > 0) ? social.comments : ' '
	const shares = (social.shares > 0) ? social.shares : ' '
	const likes = (social.likes > 0) ? social.likes : ' '

	const classesShare = (shares !== ' ') 
		? 'social-item social-item-green'
		: 'social-item'

	const classesLikes = (likes !== ' ')
		? 'social-item social-item-red'
		: 'social-item'

	return (
		<div className="social-info-container">
			<div className="social-item">
				<ChatBubbleIcon className="icon-small" />
				<span>{comments}</span>
			</div>
			<div className={classesShare}>
				<UpdateIcon className="icon-small"/>
				<span>{shares}</span>
			</div>

			<div className={classesLikes}>
				<DoubleArrowUpIcon className="icon-small"/>
				<span>{likes}</span>
			</div>

			<div>
				<Share1Icon className="icon-small"/>
			</div>
		</div>
	)
}

export default SocialMessageInfo