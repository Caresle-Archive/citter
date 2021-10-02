import './CitterMessage.css'
import SocialMessageInfo from './SocialMessageInfo.jsx'
import UserInfoHeader from './UserInfoHeader.jsx'

const CitterMessage = ({ data }) => {
	return (
		<div className="citter-message-card">
			<UserInfoHeader userData={data.user}/>
			<p>
				{data.message}
			</p>
			<SocialMessageInfo social={data.social}/>
		</div>
	)
}

export default CitterMessage