// import PropTypes from 'prop-types';
import {List, Item, Button} from './FeedbackOptions.styled'

export const ListFeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return (
    
            <List>
              {options.map((option) => (
                <Item key={option.id}>
                  <Button onClick={() => {onLeaveFeedback(option.id)}}> {option.name} </Button>
                </Item>
              ))}
            </List>
   
)
} 