import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  changeState = (name) => {
    // name.persist();
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    // this.setState(prevState => ({ [name]: prevState[name] + 1 }))
  };

  render() {
    const totalFeedbacks =
      this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = (this.state.good / totalFeedbacks) * 100;

    return (
      <>
        <SectionTitle>
          <FeedbackOptions onLeaveFeedback={this.changeState} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedbacks={totalFeedbacks}
            positiveFeedback={positiveFeedback}
          />
        </SectionTitle>
      </>
    );
  }
}

export default App;
