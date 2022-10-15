export const ListFeedbackOptions = ({options, onLeaveFeedback }) => { 
    return (
    
            <ul>
              {options.map((option) => (
                <li key={option.id}>
                  <button onClick={() => {onLeaveFeedback(option.id)}}> {option.name} </button>
                </li>
              ))}
            </ul>
   
)
} 