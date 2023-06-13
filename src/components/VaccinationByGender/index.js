import {ResponsiveContainer, Cell, PieChart, Pie, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {data} = props

  return (
    <>
      <div className="third-con">
        <h1 className="header-gender">Vaccination by gender</h1>
        <div className="vaccination-gender-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                data={data}
                startAngle={180}
                endAngle={0}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Male" fill=" #f54394" />
                <Cell name="Female" fill="#5a8dee" />
                <Cell name="Other" fill="#2cc6c6" />
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
    </>
  )
}

export default VaccinationByGender
