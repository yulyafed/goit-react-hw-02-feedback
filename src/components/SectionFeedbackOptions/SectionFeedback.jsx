import { ListFeedbackOptions } from "./FeedbackOptions/FeedbackOptions"

export const SectionFeedbacks = ({ options, onLeaveFeedback }) => { 
       
    return (
        <div>
            <h2> Please leave feedback</h2>
            <ListFeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}/>
          </div>
    )
}