import styled from 'styled-components';

const StyledReultContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 50%;

	text-align: center;
	color: white;
	border-radius: 2rem;
	background: linear-gradient(180deg, #7755ff 0%, #6943ff 0.01%, #2f2ce9 100%);
	@media screen and (min-width: 768px) {
		width: 50%;
		height: 100%;
		padding: 2rem;
	}
`;

const StyledResultNumber = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 200px;
	width: 200px;
	margin-bottom: 2rem;
	border-radius: 50%;
	background: linear-gradient(
		180deg,
		#4d21c9 0%,
		rgba(37, 33, 201, 0) 100%,
		rgba(37, 33, 201, 0) 100%
	);
	@media screen and(min-width: 768px) {
		height: 140px;
		width: 140px;
	}
`;

const StyledResultTotal = styled.p`
	margin: 0;
	font-size: 4rem;
`;

const StyledCalification = styled.p`
	font-size: 2rem;
	margin: 0;
`;

export {
	StyledReultContainer,
	StyledResultNumber,
	StyledResultTotal,
	StyledCalification
};
