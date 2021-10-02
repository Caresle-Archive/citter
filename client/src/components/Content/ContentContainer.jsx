import ButtonCittear from "./ButtonCittear/ButtonCittear.jsx"
import CitterMessage from "./CitterMessage/CitterMessage.jsx"
import './ContentContainer.css'

const ContentContainer = () => {
	return (
		<div className="content-container">
			<h2>Citter</h2>
			<ButtonCittear />
			<CitterMessage />
		</div>
	)
}

export default ContentContainer