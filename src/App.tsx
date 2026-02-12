import React, { useEffect, useState } from 'react';
import { Clock, DollarSign, Triangle } from 'lucide-react';

type TaskKey = 'scheduling' | 'invoicing' | 'inventory' | 'reporting';

type TaskConfig = {
  timeReduction: number;
  name: string;
};

const TASKS: Record<TaskKey, TaskConfig> = {
  scheduling: { timeReduction: 0.7, name: 'Meeting Scheduling & Calendar Management' },
  invoicing: { timeReduction: 0.8, name: 'Invoice Processing & Payment Tracking' },
  inventory: { timeReduction: 0.65, name: 'Inventory Management' },
  reporting: { timeReduction: 0.75, name: 'Report Generation & Analytics' },
};

function normalizePositiveInteger(value: string): number {
  return Math.max(1, parseInt(value, 10) || 0);
}

function App() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [avgHourlyRate, setAvgHourlyRate] = useState(25);
  const [selectedTask, setSelectedTask] = useState<TaskKey>('scheduling');
  const [annualSavings, setAnnualSavings] = useState(0);
  const [hoursReclaimed, setHoursReclaimed] = useState(0);

  useEffect(() => {
    const weeklyHours = employees * hoursPerWeek * TASKS[selectedTask].timeReduction * 0.2;
    const weeklySavings = weeklyHours * avgHourlyRate;

    setAnnualSavings(Math.round(weeklySavings * 52));
    setHoursReclaimed(Math.round(weeklyHours * 52));
  }, [employees, hoursPerWeek, avgHourlyRate, selectedTask]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Abstract Technology"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <Triangle className="w-24 h-24 mx-auto mb-8 text-yellow-500" />
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-cyan-400">
              Automation ROI Calculator
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover how much time and money your business could save through intelligent automation
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-lg p-8 rounded-lg border border-cyan-500/20 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="task" className="block text-cyan-400 mb-2">
                    Process to Automate
                  </label>
                  <select
                    id="task"
                    value={selectedTask}
                    onChange={(e) => setSelectedTask(e.target.value as TaskKey)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  >
                    {Object.entries(TASKS).map(([key, { name }]) => (
                      <option key={key} value={key}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="employees" className="block text-cyan-400 mb-2">
                    Number of Employees
                  </label>
                  <input
                    id="employees"
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(normalizePositiveInteger(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="hoursPerWeek" className="block text-cyan-400 mb-2">
                    Hours Worked per Week
                  </label>
                  <input
                    id="hoursPerWeek"
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(normalizePositiveInteger(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label htmlFor="avgHourlyRate" className="block text-cyan-400 mb-2">
                    Average Hourly Rate ($)
                  </label>
                  <input
                    id="avgHourlyRate"
                    type="number"
                    value={avgHourlyRate}
                    onChange={(e) => setAvgHourlyRate(normalizePositiveInteger(e.target.value))}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-6 rounded-lg border border-yellow-500/20">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-yellow-500">Annual Savings</h3>
                </div>
                <p className="text-4xl font-bold text-white">${annualSavings.toLocaleString()}</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-6 rounded-lg border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-cyan-400">Hours Reclaimed</h3>
                </div>
                <p className="text-4xl font-bold text-white">{hoursReclaimed.toLocaleString()} hrs/year</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-yellow-500 to-cyan-500 text-black font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                Start Your Automation Journey
              </button>
              <p className="text-gray-400 mt-4">Contact us to learn how we can help you achieve these savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
