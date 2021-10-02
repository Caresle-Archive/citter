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
				<li><HomeIcon className="icon-big"/></li>
				<li><MagnifyingGlassIcon className="icon-big"/></li>
				<li><BellIcon className="icon-big"/></li>
				<li><EnvelopeClosedIcon className="icon-big"/></li>
			</ul>
		</footer>
	)
}

export default BottomBar