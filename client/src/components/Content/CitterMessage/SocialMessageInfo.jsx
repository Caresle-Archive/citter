import { 
	ChatBubbleIcon,
	UpdateIcon,
	DoubleArrowUpIcon,
	Share1Icon
} from '@radix-ui/react-icons'

const SocialMessageInfo = () => {
	return (
		<div className="social-info-container">
			<div className="social-item">
				<ChatBubbleIcon className="icon-small" />
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
	)
}

export default SocialMessageInfo