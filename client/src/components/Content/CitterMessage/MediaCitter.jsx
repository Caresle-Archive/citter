import './MediaCitter.css'

const MediaCitter = ({ media }) => {
	const { type, src } = media
	if (type === 'video') {
		return  (
			<div className="video-media-container">
				<source src={src} type="video/webm"/>
			</div>
		)
	}
	if (type === 'img') {
		return (
			<div className="img-media-container">
				<img 
					className="img-media-citter"
					src={src} 
					alt="this containt images"
				/>
			</div>
		)
	}
	return ''
}

export default MediaCitter