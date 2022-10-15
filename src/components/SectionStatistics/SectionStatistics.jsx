import { ListStatisticsOptions } from "./Statistics/Statistics"
export const SectionStatistics = ({ 
    good,neutral,bad,total,positivePercentage
}) => { 
    return (
        <div>
            <h2> Statistics</h2>
            <ListStatisticsOptions good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
          </div>
    )
}