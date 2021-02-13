import { Img } from 'remotion'
import styled from 'styled-components'

type TitleProps = {
	hasBackground?: boolean
}

export const Container = styled.div`
	background: white;
`

export const Part = styled.div`
	font-family: sans-serif;

	background: white;
	color: #363636;

	width: 100%;

	display: flex;
	flex-direction: column;
`

export const Title = styled.div<TitleProps>`
	width: 100%;
	height: auto;

	font-size: 100px;
	font-weight: 900;

	padding: 24px 48px;

	display: flex;
	align-items: center;

	background: ${(props) => (props.hasBackground ? '#f2f2f2' : null)};

	span {
		margin-left: 48px;
	}

	svg {
		overflow: initial;
		height: 100px;
		width: 100px;
	}
`

export const IntroductionContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	flex: 1;
`

export const Description = styled.div`
	font-size: 50px;

	max-width: 60%;
`

export const Author = styled.div`
	font-size: 35px;
	font-weight: bold;
`

export const PartImg = styled(Img)`
	flex: 1;
`
