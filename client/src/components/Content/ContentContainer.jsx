import CitterMessage from "./CitterMessage/CitterMessage.jsx"
import './ContentContainer.css'

/**
 * citterMessage is an array for the content
 * for each message
 * 
 * userProfile it's a boolean for render only
 * the citter message from the user
 */

const ContentContainer = ({ userProfile, citterMessage }) => {
	
	if (userProfile) {
		return (
			<div className="content-container">
				<h2>User</h2>
				{
					citterMessage.map(e => {
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