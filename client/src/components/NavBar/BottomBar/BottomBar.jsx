import { 
	HomeIcon
} from '@radix-ui/react-icons'

const BottomBar = ({ className, changePage }) => {
	return (
		<footer className={className}>
			<ul>
				<li onClick={changePage("feed")}>
					<HomeIcon className="icon-big"/>
				</li>
			</ul>
		</footer>
	)
}

export default BottomBar