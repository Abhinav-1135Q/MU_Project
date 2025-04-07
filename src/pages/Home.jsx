import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Welcome to Your Dashboard
        </h1>
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <p className="text-gray-600 dark:text-gray-300">
            Your personalized dashboard content will appear here.
          </p>
        </div>
      </div>
    </Layout>
  );
}