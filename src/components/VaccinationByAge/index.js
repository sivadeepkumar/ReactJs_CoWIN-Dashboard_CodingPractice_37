import {ResponsiveContainer, Cell, PieChart, Pie, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {data} = props

  return (
    <div className="second-con">
      <h1 className="header-age">Vaccination by Age</h1>

      <div className="vaccination-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={data}
              startAngle={0}
              endAngle={360}
              innerRadius="0%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#2cc6c6" />
              <Cell name="above 60" fill="#64c2a6" />
            </Pie>
            <Legend
              iconType="circle"
              layout="horizontal"
              horizontalAlign="middle"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationByAge
