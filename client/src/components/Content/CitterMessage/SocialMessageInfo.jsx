import { 
	ChatBubbleIcon,
	UpdateIcon,
	DoubleArrowUpIcon
} from '@radix-ui/react-icons'
import IconSmallStyled from '../../IconButtons/IconSmallStyled'

/**
 * Returns the social part like the number of likes
 * comments and shares.
 */

const SocialMessageInfo = ({ onSocial, social }) => {
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
				<IconSmallStyled>
					<ChatBubbleIcon />
					<span>{comments}</span>
				</IconSmallStyled>
			</div>
			<div className={classesShare}>
				<IconSmallStyled onClick={onSocial("share")}>
					<UpdateIcon />
				</IconSmallStyled>
			</div>

			<div className={classesLikes} >
				<IconSmallStyled onClick={onSocial("like")}>
					<DoubleArrowUpIcon />
				</IconSmallStyled>
			</div>
		</div>
	)
}

export default SocialMessageInfo