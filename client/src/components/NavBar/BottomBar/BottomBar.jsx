import './BottomBar.css'
import { 
	HomeIcon
} from '@radix-ui/react-icons'

const BottomBar = ({ changePage }) => {
	return (
		<footer className="bottom-bar">
			<ul>
				<li className="background-icon" onClick={changePage("feed")}>
					<HomeIcon className="icon-big"/>
				</li>
			</ul>
		</footer>
	)
}

export default BottomBar