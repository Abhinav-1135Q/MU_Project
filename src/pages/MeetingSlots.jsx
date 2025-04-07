import React from 'react';
import Layout from '../components/Layout';

export default function MeetingSlots() {
  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: false },
    { time: '11:00 AM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: false },
    { time: '4:00 PM', available: true },
  ];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Available Meeting Slots</h1>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeSlots.map((slot, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  slot.available
                    ? 'border-green-200 bg-green-50 cursor-pointer hover:bg-green-100'
                    : 'border-gray-200 bg-gray-50 opacity-50'
                }`}
              ></div>