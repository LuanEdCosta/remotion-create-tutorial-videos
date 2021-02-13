import { FiArrowRightCircle, FiVideo } from 'react-icons/fi'
import {
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion'
import {
	Author,
	Container,
	Description,
	IntroductionContent,
	Part,
	PartImg,
	Title,
} from './styles'

export interface ImageBasedProps {
	data: RemotionTutorial.Tutorial
}

export const ImageBased: React.FC<ImageBasedProps> = ({ data }) => {
	const { fps, width } = useVideoConfig()
	const currentFrame = useCurrentFrame()

	const introductionOpacity = interpolate(
		currentFrame,
		[0, (data.introductionDurationInSeconds * fps) / 4],
		[0.5, 1],
	)

	return (
		<Container>
			<Sequence
				from={0}
				name="Introduction"
				durationInFrames={data.introductionDurationInSeconds * 2 * fps}
			>
				<Part style={{ opacity: introductionOpacity }}>
					<Title hasBackground>
						<FiVideo />
						<span>{data.title}</span>
					</Title>

					<IntroductionContent>
						{!!data.description && (
							<Description>{data.description}</Description>
						)}

						{!!data.author && <Author>{data.author}</Author>}
					</IntroductionContent>
				</Part>
			</Sequence>

			{data.content.map((part, index) => {
				const { title, image, durationInSeconds } = part
				const { content, introductionDurationInSeconds } = data

				const elapsedSeconds = content
					.slice(0, index)
					.reduce((total, currentValue) => {
						return total + currentValue.durationInSeconds
					}, introductionDurationInSeconds)

				const name = `${title} - Index ${index}`

				const from = elapsedSeconds * fps
				const duration = (elapsedSeconds + durationInSeconds) * fps

				const translateX = interpolate(
					currentFrame,
					[from, from + fps / 3],
					[width / 2, 0],
					{
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					},
				)

				const opacity = interpolate(
					currentFrame,
					[from, from + fps / 3],
					[0.5, 1],
				)

				return (
					<Sequence
						key={title}
						name={name}
						from={from}
						durationInFrames={duration}
					>
						<Part style={{ transform: `translateX(${translateX}px)`, opacity }}>
							<Title>
								<FiArrowRightCircle />
								<span>{title}</span>
							</Title>

							<PartImg
								src={
									image && image.includes('http')
										? image
										: require('../../assets/' + image)
								}
							/>
						</Part>
					</Sequence>
				)
			})}
		</Container>
	)
}
