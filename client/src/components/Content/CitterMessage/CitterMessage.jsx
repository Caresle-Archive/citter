import './CitterMessage.css'
import SocialMessageInfo from './SocialMessageInfo.jsx'
import UserInfoHeader from './UserInfoHeader.jsx'
import MediaCitter from './MediaCitter.jsx'

/**
 * 
 * @param {Object} data 
 * @returns 
 */
const CitterMessage = ({ data }) => {
	return (
		<div className="citter-message-card">
			<UserInfoHeader userData={data.user}/>
			<p>
				{data.message}
			</p>
			<MediaCitter media={data.media}/>
			<SocialMessageInfo social={data.social}/>
		</div>
	)
}

export default CitterMessage