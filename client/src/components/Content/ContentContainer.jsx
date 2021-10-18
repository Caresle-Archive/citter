import CitterMessageStyled from "./CitterMessage/CitterMessageStyled"

/**
 * citterMessage is an array for the content
 * for each message
 * 
 * userProfile it's a boolean for render only
 * the citter message from the user
 */

const ContentContainer = ({ 
	className,
	user, 
	userProfile,
	citterMessage, 
	handleSocial
}) => {
	let citterContent = []

	if (userProfile) {
		citterContent = citterMessage.filter(e => e.username === user.username)
		return (
			<div className={className}>
				{
					citterContent.map(e => {
						return <CitterMessageStyled key={e.id} data={e} onSocial={handleSocial}/>
					})
				}
			</div>
		)
	}
	
	return (
		<div className={className}>
			{
				citterMessage.map(e => {
					return <CitterMessageStyled key={e.id} idKey={e.id} data={e} onSocial={handleSocial} />
				})
			}
		</div>
	)
}

export default ContentContainer