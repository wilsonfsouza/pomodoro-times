import { formatDistanceToNow } from 'date-fns'
import { useCycles } from '../../contexts/CyclesContext'
import { HistoryContainer, HistoryList, TaskStatus } from './styles'

export function History() {
  const { cycles } = useCycles()
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
            {cycles.map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(cycle.startDate, {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <TaskStatus statusColor="green">Complete</TaskStatus>
                    )}
                    {cycle.interruptedDate && (
                      <TaskStatus statusColor="red">Interrupted</TaskStatus>
                    )}
                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <TaskStatus statusColor="yellow">In Progress</TaskStatus>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
