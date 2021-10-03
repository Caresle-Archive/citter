import './MediaCitter.css'

const MediaCitter = ({ media }) => {
	const { type, src } = media
	
	if (src === '' || src === undefined) return ''
	if (type === 'video') {
		return  (
			<div className="video-media-container">
				<video autoPlay>
					<source src={src} type="video/mp4"/>
				</video>
			</div>
		)
	}
	if (type === 'img' && src !== '') {
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