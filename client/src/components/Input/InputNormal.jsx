import './InputNormal.css'

const InputNormal = ({type, placeholder, id, name}) => {
	return (
		<input 
			className="input-normal"
			type={type}
			placeholder={placeholder} 
			id={id}
			name={name}
			required
		/>
	)
}

export default InputNormal