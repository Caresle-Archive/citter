import './TopBar.css'

const TopBar = ({ showSideBar }) => {
	return (
		<header className="top-bar">
			<img onClick={showSideBar("sidebar")} 
				className="img-profile" 
				alt="Profile" 
				src="./profile.jpg"
			></img>
		</header>
	)
}

export default TopBar