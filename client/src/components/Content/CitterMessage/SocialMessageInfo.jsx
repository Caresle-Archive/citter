import { 
	UpdateIcon,
	DoubleArrowUpIcon
} from '@radix-ui/react-icons'
import IconSmallStyled from '../../IconButtons/IconSmallStyled'

/**
 * Returns the social part like the number of likes
 * and shares.
 */

const SocialMessageInfo = ({ onSocial, social, idPass }) => {
	const shares = (social.shares > 0) ? social.shares : ' '
	const likes = (social.likes > 0) ? social.likes : ' '
	
	return (
		<div className="social-info-container" >
			<div className="social-item" id={`social-item-share-${idPass}`}>
				<IconSmallStyled onClick={onSocial("share", idPass)}>
					<UpdateIcon />
				</IconSmallStyled>
				<span>
					{shares}
				</span>
			</div>

			<div className="social-item" id={`social-item-like-${idPass}`}>
				<IconSmallStyled onClick={onSocial("like", idPass)}>
					<DoubleArrowUpIcon />
				</IconSmallStyled>
				<span>
					{likes}
				</span>
			</div>
		</div>
	)
}

export default SocialMessageInfo