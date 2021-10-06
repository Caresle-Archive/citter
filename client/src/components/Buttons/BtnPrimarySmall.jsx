import './BtnPrimarySmall.css'

const BtnPrimarySmall = ({text, type, boxShadow}) => {
	if (boxShadow) {
		return (
			<button
				className="btn-primary-small btn-box-shadow"
				type={type}
			>
				{text}
			</button>
		)
	}
	return (
		<button 
			className="btn-primary-small"
			type={type}
		>
			{text}
		</button>
	)
}

export default BtnPrimarySmall