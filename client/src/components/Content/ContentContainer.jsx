import CitterMessage from "./CitterMessage/CitterMessage.jsx"
import './ContentContainer.css'

/**
 * citterMessage is an array for the content
 * for each message
 * 
 * userProfile it's a boolean for render only
 * the citter message from the user
 */

const ContentContainer = ({ user, userProfile, citterMessage}) => {
	let citterContent = []

	if (userProfile) {
		citterContent = citterMessage.filter(e => e.username === user.username)
		return (
			<div className="content-container">
				{
					citterContent.map(e => {
						return <CitterMessage key={e.id} data={e} />
					})
				}
			</div>
		)
	}
	
	return (
		<div className="content-container">
			{
				citterMessage.map(e => {
					return <CitterMessage key={e.id} data={e} />
				})
			}
		</div>
	)
}

export default ContentContainer