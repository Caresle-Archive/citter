import './CitterMessage.css'
import { 
	DotsVerticalIcon,
	ChatBubbleIcon,
	UpdateIcon,
	DoubleArrowUpIcon,
	Share1Icon
} from '@radix-ui/react-icons'

const CitterMessage = () => {
	return (
		<div className="citter-message-card">
			<div className="citter-message-user">
				<img className="img-profile" src="./profile.jpg" alt="profile" />
				<div className="citter-user-info">
					<div className="font-weight-big">Caresle</div>
					<span>@Caresle1</span>
					<span>19h</span>
				</div>
				<div className="background-icon-small">
					<DotsVerticalIcon className="icon-small" />
				</div>
			</div>
			<p>
				Hi, this is a citter message
			</p>
			<div className="social-info-container">
				<div className="social-item">
					<ChatBubbleIcon className="icon-small"/>
					<span>2</span>
				</div>
				
				<div className="social-item social-item-green">
					<UpdateIcon className="icon-small"/>
					<span>3</span>
				</div>

				<div className="social-item social-item-red">
					<DoubleArrowUpIcon className="icon-small"/>
					<span>8</span>
				</div>

				<div>
					<Share1Icon className="icon-small"/>
				</div>
			</div>
		</div>
	)
}

export default CitterMessage