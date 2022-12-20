/** @format */

function Result(props) {
  let { result, handleRetake } = props;
  // console.log(result);
  let mark = 0;
  return (
    <div className="container">
      <div className="flex justify-between align-center">
        <div className="primeHeading">result sheet</div>
        <div>
          <button className="btn btn-second" onClick={handleRetake}>
            re take quiz
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th key={`1`}>Question</th>
            <th key={`2`}>Correct Answers</th>
            <th key={`3`}> Selected Answers</th>
            <th key={`5`}>Right Or Wrong</th>
          </tr>
        </thead>
        {result.map(elm => {
          elm.correctAns === elm.selectedAns ? (mark += 1) : (mark += 0);

          return (
            <tbody>
              <tr>
                <td key={`5`}>{elm.ques}</td>
                <td key={`6`}>{elm.correctAns}</td>
                <td key={`7`}>{elm.selectedAns}</td>
                <td key={`8`}>
                  {elm.correctAns === elm.selectedAns ? `✅` : `❌`}
                </td>
              </tr>
            </tbody>
          );
        })}
        <tfoot>
          <tr className="obtMrk">
            <td key={`9`}>Result</td>
            <td key={`10`}></td>
            <td key={`11`}></td>
            <td key={`12`}>
              {mark}/{10}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Result;
