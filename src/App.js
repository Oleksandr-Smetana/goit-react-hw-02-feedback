import React, { Component } from 'react';

// import Section from './components/Title/Title';
// import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onBtnGoodClick = () => {
  //   this.setState({
  //     good: this.state.good + 1,
  //   });
  // };

  onBtnGoodClick = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  onBtnNeutralClick = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  onBtnBadClick = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  getTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  getGoodFeedbackPercentage = () => {
    return Math.round((this.state.good / this.getTotalFeedback()) * 100);
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">Please leave feedback</h1>

        {/* <FeedbackOptions
          options={this.state}
          onLeaveFeedback={
            (this.onBtnGoodClick, this.onBtnNeutralClick, this.onBtnBadClick)
          }
        /> */}
        <div className="buttons">
          <button type="button" className="good" onClick={this.onBtnGoodClick}>
            Good
          </button>
          <button
            type="button"
            className="neutral"
            onClick={this.onBtnNeutralClick}
          >
            Neutral
          </button>
          <button type="button" className="bad" onClick={this.onBtnBadClick}>
            Bad
          </button>
        </div>
        <div className="statWrap">
          <h1 className="statTitle">Statistics</h1>
          {this.getTotalFeedback() ? (
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.getTotalFeedback()}</li>
              <li>Positive feedback: {this.getGoodFeedbackPercentage()}%</li>
            </ul>
          ) : (
            <p>No feedback given</p>
          )}
        </div>

        {/* <Section title="" />
        <FeedbackOptions options={ } onLeaveFeedback={ } />
      <Statistics good={ } neutral={ } bad={ } total={ } positivePercentage={ } />
      <Notification message="No feedback given" /> */}
      </div>
    );
  }
}
export default Feedback;
