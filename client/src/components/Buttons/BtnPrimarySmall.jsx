// import './BtnPrimarySmall.css'

const BtnPrimarySmall = ({className, text, type, click}) => {
	return (
		<button
			onClick={click}
			className={className}
			type={type}
		>
			{text}
		</button>
	)
}

export default BtnPrimarySmall