/** @format */

function Categories(props) {
  let { tag, findTag, categories, handleDifficulty, difficulty, findQuiz } =
    props;

  let tagCtg = [
    `Entertainment`,
    `Science & Nature`,
    `Science`,
    `Mythology`,
    `Sports`,
    `Geography`,
    `History`,
    `Politics`,
    `Art`,
    `Celebrities`,
    `Animals`,
    `Vehicles`,
    `General Knowledge`,
  ];
  return (
    <div>
      <ul className="flex flex-wrap-yes">
        <li
          className={tag === "" ? `tagAct  tagCtgLi` : `tagCtgLi`}
          onClick={() => findTag(`All`)}
        >
          All
        </li>
        {tagCtg.map(elm => {
          return (
            <li
              key={elm}
              className={tag === elm ? `tagAct  tagCtgLi` : `tagCtgLi`}
              onClick={() => findTag(elm)}
            >
              {elm}
            </li>
          );
        })}
      </ul>
      <div className="select">
        <select
          name={difficulty}
          onChange={handleDifficulty}
          id="difficulty"
          defaultValue={"DEFAULT"}
        >
          <option disabled value="DEFAULT">
            Select Difficulty{" "}
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <ul className="cgtUl flex flex-wrap-yes justify-center">
        {categories.map(elm => {
          console.log(elm, `ctg`);
          return (
            <li key={elm.id} className="flex-30">
              <p> {elm.name}</p>

              <button
                className="btn btn-primary"
                onClick={() => findQuiz(elm.id)}
              >
                take quiz
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
