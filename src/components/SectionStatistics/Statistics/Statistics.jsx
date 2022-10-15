import { RenderNoFeedback } from "components/NotificationMessage/NotificationMessage"
export const ListStatisticsOptions = ({ good, neutral, bad, total, positivePercentage }) => {
    
    if (total > 0) {
        return (
            <>
                <p> Good: {good}</p>
                <p> Neutral:{ neutral }</p>
                <p> Bad: {bad} </p>
                <p> Total:{total}</p>
                <p> Positive feedback:{ positivePercentage({ good, neutral, bad })}%</p>
            </>   
        )
    }

    return (<RenderNoFeedback />);
    
}