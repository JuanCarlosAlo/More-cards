import styled from 'styled-components';

const StyledSummaryAbility = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 56px;
	padding: 1rem;
	background-color: ${({ abilityBackgroundColor }) => abilityBackgroundColor};
	border-radius: 1rem;
`;

const StyledSummaryBlockLeft = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100px;
	gap: 1rem;
`;
const StyledSummaryBlockRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100px;
	gap: 1rem;
`;

export {
	StyledSummaryAbility,
	StyledSummaryBlockLeft,
	StyledSummaryBlockRight
};
