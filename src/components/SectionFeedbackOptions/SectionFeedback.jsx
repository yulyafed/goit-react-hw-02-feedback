import { ListFeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
// import PropTypes from 'prop-types';
import { Container, Title  } from './SectionFeedback.styled'

export const SectionFeedbacks = ({ options, onLeaveFeedback }) => { 
       
    return (
        <Container>
            <Title> Please leave feedback</Title>
            <ListFeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
          </Container>
    )
}