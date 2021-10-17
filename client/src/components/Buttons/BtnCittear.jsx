import { PlusIcon } from '@radix-ui/react-icons'

const BtnCittear = ({ className, cittear }) => {
	return (
		<div className={className}>
			<button onClick={cittear("newCitter")}><PlusIcon className="icon-big" /></button>
		</div>
	)
}

export default BtnCittear