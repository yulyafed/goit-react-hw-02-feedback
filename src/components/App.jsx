import { Component } from "react";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  updateFeedbackOptions = (e) => { 
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  }

  countTotalFeedback = ({ good, neutral, bad }) => { 
    return (good + neutral + bad);
  }

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => { 
    return Math.round(good * 100 / (good + neutral + bad));
  }

  render() {

    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
 
    return (
      <>
        <div>
          <div>
            <h2> Please leave feedback</h2>
            <ul>
              {options.map((option, index) => (
                <li key={index}>
                  <button onClick={this.updateFeedbackOptions}> {option} </button>
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
  
