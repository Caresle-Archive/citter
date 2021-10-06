import './BtnCittear.css'
import { PlusIcon } from '@radix-ui/react-icons'

const BtnCittear = ({ cittear }) => {
	return (
		<div className="btn-cittear-container">
			<button onClick={cittear} className="btn-round"><PlusIcon className="icon-big" /></button>
		</div>
	)
}

export default BtnCittear