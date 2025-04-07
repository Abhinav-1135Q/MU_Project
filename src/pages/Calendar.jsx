import React from 'react';
import Layout from '../components/Layout';

export default function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  // Generate sample calendar data
  const calendarDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    hasEvent: Math.random() > 0.7,
  }));

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">{currentMonth} {currentYear}</h1>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              Next
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {days.map((day) => (
              <div key={day} className="bg-gray-50 p-4">
                <span className="text-sm font-semibold text-gray-900">{day}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`bg-white p-4 relative ${
                  day.day === currentDate.getDate() ? 'bg-blue-50' : ''
                }`}
              >
                <span className={`text-sm ${
                  day.day === currentDate.getDate() ? 'font-bold text-blue-600' : ''
                }`}>
                  {day.day}
                </span>
                {day.hasEvent && (
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}