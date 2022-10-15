import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  updateFeedbackOptions = (key) => {
    this.setState(prevState => {
      return {
        good: key === 0 ? prevState.good + 1 : prevState.good,
        neutral: key === 1 ? prevState.neutral + 1 : prevState.neutral,
        bad: key === 2 ? prevState.bad + 1 : prevState.bad,
      };
    });
  }

  countTotalFeedback = ({ good, neutral, bad }) => { 
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => { 
    const total = good + neutral + bad;
    if (total === 0) {
      return 0;
    }

    return Math.round(good * 100 / (good + neutral + bad));
  }

  render() {

    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const options = [
      {id: 0, name: 'Good'},
      {id: 1, name: 'Neutral'},
      {id: 2, name: 'Bad'}
    ];
 
    return (
      <>
        <div>
          <div>
            <h2> Please leave feedback</h2>
            <ul>
              {options.map((option) => (
                <li key={option.id}>
                  <button onClick={() => {this.updateFeedbackOptions(option.id)}}> {option.name} </button>
                </li>
              ))}
            </ul>
          </div>
        <div>
            <h2> Statistics</h2>
            <p> Good:{ good }</p>
            <p> Neutral:{ neutral }</p>
            <p> Bad: {bad} </p>
            <p> Total:{this.countTotalFeedback ({ good, neutral, bad }) }</p>
            <p> Positive feedback:{ this.countPositiveFeedbackPercentage({ good, neutral, bad })}%</p>
          </div>
        </div>
      </>
    );
  };
}
  
