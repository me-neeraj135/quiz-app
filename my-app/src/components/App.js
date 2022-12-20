/** @format */

import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: "",
      categories: [],
      difficulty: "easy",
      category: "",
      filterCtg: [],
      quiz: [],
    };
  }

  findTag = elm => {
    if (elm === `All`) {
      this.setState({ tag: `` });
    } else {
      this.setState({ tag: elm });
    }
  };

  findQuiz = category => {
    console.log(category, `findQ`);
    this.setState({ category });
  };

  handleDifficulty = e => {
    this.setState({ difficulty: e.target.value });
  };

  handleStart = () => {
    this.setState(prevState => {
      return {
        quiz: (prevState.quiz = []),
        category: (prevState.category = ""),
        filterCtg: (prevState.filterCtg = []),
        tag: (prevState.tag = ""),
      };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    let { tag, categories } = this.state;
    if (prevState.category !== this.state.category) {
      axios
        .get(
          `https://opentdb.com/api.php?amount=10&category=${this.state.category}&difficulty=${this.state.difficulty}`
        )
        .then(res => {
          let quizData = [...res.data.results];
          quizData.map(elm => {
            elm.options = [...elm.incorrect_answers, elm.correct_answer].sort();
            return elm;
          });

          this.setState({ quiz: quizData });
        })
        .catch(err => {
          console.log(err);
        });
    }
    if (prevState.tag !== this.state.tag) {
      console.log(prevState.tag, this.state.tag, tag, `psc`);
      if (tag) {
        let selectedTag = [];
        categories.forEach(elm => {
          if (elm.name.includes(tag)) {
            selectedTag = [...selectedTag, elm];
          }
        });
        this.setState({ filterCtg: selectedTag });
      }
    }
  }

  componentDidMount() {
    axios
      .get(`https://opentdb.com/api_category.php`)
      .then(res => {
        this.setState({
          categories: res.data.trivia_categories,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let { quiz, tag, categories, difficulty, category, filterCtg } = this.state;
    return (
      <div className="App">
        <Header handleStart={this.handleStart} />

        <Main
          tag={tag}
          quiz={quiz}
          categories={categories}
          difficulty={difficulty}
          category={category}
          filterCtg={filterCtg}
          findTag={this.findTag}
          handleDifficulty={this.handleDifficulty}
          findQuiz={this.findQuiz}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
