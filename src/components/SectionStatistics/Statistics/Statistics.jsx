import { RenderNoFeedback } from "components/NotificationMessage/NotificationMessage"
// import PropTypes from 'prop-types';
import { Text } from './Statistics.styled'

export const ListStatisticsOptions = ({ good, neutral, bad, total, positivePercentage }) => {
    
    if (total > 0) {
        return (
            <>
                <Text> Good: {good}</Text>
                <Text> Neutral:{ neutral }</Text>
                <Text> Bad: {bad} </Text>
                <Text> Total:{total}</Text>
                <Text> Positive feedback:{ positivePercentage({ good, neutral, bad })}%</Text>
            </>   
        )
    }

    return (<RenderNoFeedback />);
    
}