/** @format */
import React, { Component } from "react";
import Result from "./Result";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      result: [],
      error: ``,
    };
  }

  handleRetake = () => {
    this.setState({ count: 0, result: `` });
  };
  handleSelect = (e, value) => {
    let obj = {
      ques: this.props.quiz[this.state.count].question,
      correctAns: this.props.quiz[this.state.count].correct_answer,
      selectedAns: value,
      count: this.state.count,
    };

    this.setState(prevState => {
      return {
        error: ``,
        result:
          prevState.result.length === this.state.count
            ? [...prevState.result, obj]
            : prevState.result.map(elm => {
                if (elm.count === this.state.count) {
                  elm.selectedAns = value;
                }
                return elm;
              }),
      };
    });
  };
  render() {
    let { quiz } = this.props;
    let { count, result } = this.state;
    return (
      <>
        {count === 10 ? (
          <Result result={this.state.result} handleRetake={this.handleRetake} />
        ) : (
          <article className="quesCnt container">
            {quiz.length && (
              <>
                <div>
                  <label key={111} htmlFor="file">
                    {count + 1}/{quiz.length}
                  </label>
                  <br />
                  <progress
                    id="file"
                    className="wdh-100"
                    value={count + 1}
                    max="10"
                  ></progress>
                </div>

                <p className="secondHeading"> {quiz[count].question}</p>

                <ul className="quesBox">
                  {quiz[count].options.map((ans, i) => {
                    return (
                      <>
                        <li
                          key={i}
                          className={
                            result[count] && result[count].selectedAns === ans
                              ? `active flex align-center`
                              : `flex align-center`
                          }
                          dataset={i}
                          onClick={e => this.handleSelect(e, ans)}
                        >
                          {ans}
                        </li>
                      </>
                    );
                  })}

                  <div className="flex justify-between">
                    <div className="error">{this.state.error}</div>
                    <button
                      className="btn btn-second "
                      onClick={() => {
                        this.state.result.length === count + 1
                          ? this.setState(prevState => {
                              return {
                                count: prevState.count + 1,
                              };
                            })
                          : this.setState({ error: `please select an option` });
                      }}
                    >
                      next
                    </button>
                  </div>
                </ul>
              </>
            )}
          </article>
        )}
      </>
    );
  }
}

export default Articles;
