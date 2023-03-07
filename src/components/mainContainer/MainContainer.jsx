import ResultContainer from "../resultContainer/ResultContainer"
import SumaryContainer from "../sumaryContainer/SumaryContainer"
import { StyledMainContainer } from "./styles"

const MainContainer=()=>{


    return(
    <StyledMainContainer>
        <ResultContainer
            text='Your Result'
            color='rgba(202, 201, 255, 1)'
        />
        <SumaryContainer
        text='Sumary'
        color='rgba(48, 59, 89, 1)
        '
        />
    </StyledMainContainer>

    
    )
}

export default MainContainer