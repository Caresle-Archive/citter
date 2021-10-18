const TopBar = ({ className, showSideBar }) => {
	return (
		<header className={className}>
			<img onClick={showSideBar("sidebar")} 
				alt="Profile" 
				src="./profile.jpg"
			></img>
		</header>
	)
}

export default TopBar