import './BtnPrimarySmall.css'

const BtnPrimarySmall = ({text, type}) => {
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