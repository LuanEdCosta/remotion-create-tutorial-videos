/* eslint-disable @typescript-eslint/no-unused-vars */

namespace RemotionTutorial {
	interface TutorialContent {
		title: string
		image?: string
		durationInSeconds: number
	}

	interface Tutorial {
		title: string
		description?: string
		template: 'ImageBased'
		author?: string
		introductionDurationInSeconds: number
		content: TutorialContent[]
	}
}
