import { useCallback, useEffect, useState } from 'react'
import { continueRender, delayRender } from 'remotion'
import { ImageBased } from './templates'

type Data = RemotionTutorial.Tutorial | null

export interface TemplateRendererProps {
	fileName: string
}

const handle = delayRender()

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({
	fileName,
}) => {
	const [data, setData] = useState<Data>(null)

	const fetchData = useCallback(() => {
		try {
			const requiredData: Data = require(`./content/${fileName}.json`)
			setData(requiredData)
			continueRender(handle)
		} catch (e) {
			console.error(e)
		}
	}, [fileName])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	switch (data?.template) {
		case 'ImageBased':
			return <ImageBased data={data} />
		default:
			return null
	}
}
