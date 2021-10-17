import './BtnPrimarySmall.css'

const BtnPrimarySmall = ({text, type, boxShadow, click, outline}) => {
	let classList = (outline) ? 
		"btn-primary-out-small btn-form" : "btn-primary-small btn-form"
	classList = (boxShadow) ?
		`${classList} btn-box-shadow` : classList
	
	return (
		<button
			onClick={click}
			className={classList}
			type={type}
		>
			{text}
		</button>
	)
}

export default BtnPrimarySmall