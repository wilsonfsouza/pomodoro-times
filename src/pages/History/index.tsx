import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Started At</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 6 }).map((_, index) => {
              return (
                <tr key={index}>
                  <td>Project 1</td>
                  <td>20 minutes</td>
                  <td>2 months ago</td>
                  <td>Complete</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
