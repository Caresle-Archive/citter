import { Cross1Icon } from '@radix-ui/react-icons'
import './NewCitter.css'

const NewCitter = ({ cancelCitter }) => {
	return (
		<div>
			<div>
				<Cross1Icon onClick={cancelCitter} className="icon-big"/>
				<button className="btn-primary">Cittear</button>
			</div>
			<form>
				<textarea
					className="input-citter"
					name="citter_message"
					id="citter-message"
					cols="30"
					rows="10"
					placeholder="Say something"
				></textarea>

			</form>
		</div>
	)
}

export default NewCitter