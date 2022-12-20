/** @format */

import { React, Component } from "react";
import Articles from "./Articles";
import Categories from "./Categories";
import Loader from "./Loader";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    let {
      quiz,
      tag,
      categories,
      filterCtg,
      findTag,
      handleDifficulty,
      difficulty,
      findQuiz,
    } = this.props;

    return (
      <main className="main">
        <div className="container">
          <div className="">
            {quiz.length ? (
              <Articles quiz={quiz} />
            ) : (
              <>
                {categories.length ? (
                  <Categories
                    tag={tag}
                    findTag={findTag}
                    categories={tag !== "" ? filterCtg : categories}
                    handleDifficulty={handleDifficulty}
                    difficulty={difficulty}
                    findQuiz={findQuiz}
                  />
                ) : (
                  <Loader />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
