import styled from 'styled-components';

const StyledMainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 809px;
	width: 375px;
	background-color: white;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		height: 512px;
		width: 736px;
		border-radius: 2rem;
	}
`;

export { StyledMainContainer };
