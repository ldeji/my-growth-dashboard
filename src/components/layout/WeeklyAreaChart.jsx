import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

import { weeklyProgress } from "../../data/weeklyProgress"


const WeeklyAreaChart = () => {
  return (
    <div className="w-full h-70 bg-white rounded-lg p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">
        Weekly Work & Meditation Progress
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyProgress}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="work"
            stroke="#2563eb"
            fill="#93c5fd"
            name="Work Hours"
          />

          <Area
            type="monotone"
            dataKey="meditation"
            stroke="#16a34a"
            fill="#86efac"
            name="Meditation (mins)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default WeeklyAreaChart
