import React from 'react';

const SkeletonLoader = ({ className = '' }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-800/50 rounded-lg h-4 mb-3"></div>
      <div className="bg-gray-800/50 rounded-lg h-4 mb-3 w-3/4"></div>
      <div className="bg-gray-800/50 rounded-lg h-4 w-1/2"></div>
    </div>
  );
};

export const ProjectSkeleton = () => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 animate-pulse">
    <div className="bg-gray-700/50 h-8 w-8 rounded-lg mb-4"></div>
    <div className="bg-gray-700/50 h-6 w-3/4 rounded mb-3"></div>
    <div className="space-y-2 mb-4">
      <div className="bg-gray-700/50 h-4 w-full rounded"></div>
      <div className="bg-gray-700/50 h-4 w-2/3 rounded"></div>
    </div>
    <div className="flex space-x-2 mb-4">
      <div className="bg-gray-700/50 h-6 w-16 rounded-full"></div>
      <div className="bg-gray-700/50 h-6 w-16 rounded-full"></div>
      <div className="bg-gray-700/50 h-6 w-16 rounded-full"></div>
    </div>
  </div>
);

export default SkeletonLoader;
