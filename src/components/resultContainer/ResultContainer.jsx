
import Title from "../title/Title"
import { StyledReultContainer,StyledResultNumber, StyledResultTotal, StyledCalification } from "./styles"


const ResultContainer =({color,text})=>{
   return(<>
   <StyledReultContainer>  
    <Title 
    color={color}
    text={text}/>
    <StyledResultNumber>
        <StyledResultTotal>
            76
        </StyledResultTotal>
        <p>of 100</p>
    </StyledResultNumber>
    <StyledCalification>
        Great
    </StyledCalification>
    <p>Your performance exceed 65% of the people conducting the test here!</p>   
    </StyledReultContainer>
    </>
   ) 

}

export default ResultContainer