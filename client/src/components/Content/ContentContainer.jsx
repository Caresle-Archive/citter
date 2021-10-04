import CitterMessage from "./CitterMessage/CitterMessage.jsx"
import './ContentContainer.css'

/**
 * citterMessage is an array for the content
 * for each message
 */

const citterMessage = [
	{
		id: 1,
		user: {
			name: 'Caresle',
			username: '@Caresle1',
			time: '19h'
		},
		message: 'This is my message',
		media: {},
		social: {
			comments: 4,
			shares: 0,
			likes: 5
		}
	},
	{
		id: 2,
		user: {
			name: 'Caresle',
			username: '@Caresle1',
			time: '20h'
		},
		message: 'Message 2',
		media: {
			type: 'img',
			src: './profile.jpg'
		},
		social: {
			comments: 0,
			shares: 1,
			likes: 6
		}
	},
	{
		id: 3,
		user: {
			name: 'Caresle',
			username: '@Caresle1',
			time: '21h'
		},
		message: 'Message 3',
		media: {
			type: 'video'
		},
		social: {
			comments: 2,
			shares: 1,
			likes: 0
		}
	},
	{
		id: 4,
		user: {
			name: 'Caresle',
			username: '@Caresle1',
			time: '22h'
		},
		message: 'This is the second message with good content',
		media: {},
		social: {
			comments: 0,
			shares: 0,
			likes: 0
		}
	}
]

const ContentContainer = () => {
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