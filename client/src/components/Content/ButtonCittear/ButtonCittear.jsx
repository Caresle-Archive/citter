import './ButtonCittear.css'
import { PlusIcon } from '@radix-ui/react-icons'

const ButtonCittear = () => {
	return (
		<div className="btn-container">
			<button className="btn-round"><PlusIcon className="icon-big" /></button>
		</div>
	)
}

export default ButtonCittear