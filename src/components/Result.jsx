import { calculateInvestmentResults, formatter } from "../util/investment.js";
function Result({ input }) {
  const results = calculateInvestmentResults(input);
  console.log(results);
  return (
    <table id="result">
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest Year</th>
        <th>Total Interest</th>
        <th>Invested Captial</th>
      </tr>
      <tbody>
        {results.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>
                {formatter.format(
                  result.valueEndOfYear - input.initialInvestment
                )}
              </td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
