import { StyledSummaryAbility, StyledSummaryBlockLeft,StyledSummaryBlockRight } from "./styles"


const SummaryAbility=({summaryIcon,summaryText,summaryNumber,abilityBackgroundColor})=>{
   
    return(
        <StyledSummaryAbility abilityBackgroundColor={abilityBackgroundColor}>
            <StyledSummaryBlockLeft>
                <img src={summaryIcon} alt="" />
                <p>{summaryText}</p>
            </StyledSummaryBlockLeft>
            <StyledSummaryBlockRight>
                <p>{summaryNumber}</p>
                <p>/100</p>
            </StyledSummaryBlockRight>
            
        </StyledSummaryAbility>
    )
}

export default SummaryAbility