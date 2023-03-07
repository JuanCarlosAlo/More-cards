import SummaryAbility from "../sumaryAbility/SumaryAbility"
import Title from "../title/Title"
import { StyledSummaryContainer , StyledSummaryButton} from "./styles"
import { v4 } from "uuid"

const summaryObj =[
    {
        summaryIcon: '/public/images/icon-reaction.svg',
        summaryText: 'Reaction',
        summaryNumber: '80',
        abilityBackgroundColor: 'rgba(255, 85, 85, 0.2)',
        id: v4()
    },
    {
        summaryIcon: '/public/images/icon-memory.svg',
        summaryText: 'Memory',
        summaryNumber: '92',
        abilityBackgroundColor: 'rgba(255, 178, 30, 0.2)',
        id:v4()
    },
    {
        summaryIcon: '/public/images/icon-verbal.svg',
        summaryText: 'Verbal',
        summaryNumber: '61',
        abilityBackgroundColor: 'rgba(0, 187, 143, 0.2)',
        id:v4()
    },
    {
        summaryIcon: '/public/images/icon-visual.svg',
        summaryText: 'Visual',
        summaryNumber: '73',
        abilityBackgroundColor: 'rgba(17, 37, 214, 0.2)',
        id:v4()
    },
]


const SummaryContainer =({text,color})=>{
    return(
        <StyledSummaryContainer>
        <Title text ={text} color ={color}/>
            {
            summaryObj.map(element=>
                    <SummaryAbility
                        {...element}
                        key={element.id}
                    />
                )
            
            }
            <StyledSummaryButton>
                Continue
            </StyledSummaryButton>
        </StyledSummaryContainer>
    )
}

export default SummaryContainer