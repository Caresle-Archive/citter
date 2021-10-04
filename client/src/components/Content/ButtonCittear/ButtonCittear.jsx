import './ButtonCittear.css'
import { PlusIcon } from '@radix-ui/react-icons'

const ButtonCittear = ({ cittear }) => {
	return (
		<div className="btn-container">
			<button onClick={cittear} className="btn-round"><PlusIcon className="icon-big" /></button>
		</div>
	)
}

export default ButtonCittear