import { Cross1Icon } from '@radix-ui/react-icons'
import './NewCitter.css'

const NewCitter = ({ cancelCitter, submitCitter }) => {
	
	return (
		<div>
			<form onSubmit={submitCitter}>
				<div>
					<Cross1Icon onClick={cancelCitter("feed")} className="icon-big"/>
					<button className="btn-primary" type="submit">Cittear</button>
				</div>
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