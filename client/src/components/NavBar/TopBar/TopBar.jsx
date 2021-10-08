import './TopBar.css'
import {
	StarIcon,
	Component1Icon
} from '@radix-ui/react-icons'

const TopBar = ({ showSideBar }) => {
	return (
		<header className="top-bar">
			<img onClick={showSideBar("sidebar")} 
				className="img-profile" 
				alt="Profile" 
				src="./profile.jpg"
			></img>
			<div className="background-icon">
				<Component1Icon className="icon-big" />
			</div>
			<div className="background-icon">
				<StarIcon className="icon-big"/>
			</div>
		</header>
	)
}

export default TopBar