import styled from 'styled-components';

const StyledSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	text-align: start;
	padding-left: 2rem;
	padding-right: 2rem;
	@media screen and (min-width: 768px) {
		width: 50%;
		padding: 2rem;
	}
`;

const StyledSummaryButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 56px;
	border-radius: 2rem;
	color: white;
	background-color: rgba(48, 59, 89, 1);
`;

export { StyledSummaryContainer, StyledSummaryButton };
