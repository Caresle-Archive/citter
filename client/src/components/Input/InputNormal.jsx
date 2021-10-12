import './InputNormal.css'

const InputNormal = ({type, placeholder, id, name, onChange}) => {
	return (
		<input 
			className="input-normal"
			type={type}
			placeholder={placeholder} 
			id={id}
			name={name}
			onChange={onChange}
			required
		/>
	)
}

export default InputNormal