import { ListStatisticsOptions } from "./Statistics/Statistics"
// import PropTypes from 'prop-types';
import { Container, Title  } from './SectionStatistics.styled'

export const SectionStatistics = ({ 
    good,neutral,bad,total,positivePercentage
}) => { 
    return (
        <Container>
            <Title> Statistics</Title>
            <ListStatisticsOptions good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
          </Container>
    )
}