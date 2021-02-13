import { Composition } from 'remotion'
import { TemplateRenderer } from './TemplateRenderer'

export const Video: React.FC = () => {
	return (
		<>
			<Composition
				id="Video"
				component={TemplateRenderer}
				durationInFrames={35 * 30}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					fileName: 'example',
				}}
			/>
		</>
	)
}
