import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface JobListingProps {
  title: string;
}

const JobListing: React.FC<JobListingProps> = ({ title }) => {
  return (
    <div className="job-listing flex justify-between items-center py-6 border-b border-gray-200">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-center">
        <button className="mr-4 text-gray-600 hover:text-gray-800 flex items-center mr-6">
          View details 
          <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-4 w-4" />
        </button>
        <button className="bg-black text-white px-6 py-4 rounded-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobListing;