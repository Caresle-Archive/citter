// import './InputNormal.css'

const InputNormal = ({className, type, placeholder, id, name, onChange}) => {
	return (
		<input 
			className={className}
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