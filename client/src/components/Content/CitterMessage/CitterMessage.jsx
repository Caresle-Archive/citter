import './CitterMessage.css'
import SocialMessageInfo from './SocialMessageInfo.jsx'
import UserInfoHeader from './UserInfoHeader.jsx'

const CitterMessage = () => {
	return (
		<div className="citter-message-card">
			<UserInfoHeader userData={
				{
					name: 'Caresle',
					username: '@Caresle1',
					time: '19h'
				}
			}/>
			<p>
				Hi, this is a citter message
			</p>
			<SocialMessageInfo />
		</div>
	)
}

export default CitterMessage