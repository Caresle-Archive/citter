import './BottomBar.css'
import { 
	HomeIcon,
	MagnifyingGlassIcon,
	BellIcon,
	EnvelopeClosedIcon
} from '@radix-ui/react-icons'

const BottomBar = () => {
	return (
		<footer className="bottom-bar">
			<ul>
				<li className="background-icon"><HomeIcon className="icon-big"/></li>
				<li className="background-icon"><MagnifyingGlassIcon className="icon-big"/></li>
				<li className="background-icon"><BellIcon className="icon-big"/></li>
				<li className="background-icon"><EnvelopeClosedIcon className="icon-big"/></li>
			</ul>
		</footer>
	)
}

export default BottomBar