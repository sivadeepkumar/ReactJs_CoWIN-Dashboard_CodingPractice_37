import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {data} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <h1 className="first-header">CoWIN Vaccination in India</h1>
      <div className="first-container">
        <div>
          <h1 className="first-header">Vaccination Coverage</h1>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="vaccineDate"
                tickFormatter={DataFormatter}
                tick={{
                  stroke: 'gray',
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{
                  stroke: 'gray',
                  strokeWidth: 0,
                }}
              />
              <Legend
                wrapperStyle={{
                  padding: 30,
                }}
              />
              <Bar dataKey="dose1" name="DOSE1" fill="#5a8dee" barSize="20%" />
              <Bar dataKey="dose2" name="DOSE2" fill="#f54394" barSize="20%" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}

export default VaccinationCoverage
