// import './CitterMessage.css'
import SocialMessageInfo from './SocialMessageInfo.jsx'
import UserInfoHeader from './UserInfoHeader.jsx'
import MediaCitter from './MediaCitter.jsx'

/**
 * 
 * @param {Object} data 
 * @returns 
 */
const CitterMessage = ({ className, idKey, data, onSocial }) => {
	return (
		<div id={idKey} className={className}>
			<UserInfoHeader 
				username={data.username}
				name={data.name}
			/>
			<p>
				{data.message}
			</p>
			<MediaCitter media={data.media}/>
			<SocialMessageInfo onSocial={onSocial} social={data.social}/>
		</div>
	)
}

export default CitterMessage