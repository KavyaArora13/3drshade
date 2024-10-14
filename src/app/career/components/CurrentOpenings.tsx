import React from 'react';
import JobListing from './JobListingProps';

const CurrentOpenings: React.FC = () => {
  const openings = [
    "Product Designer",
    "Senior Project Manager",
    "Content Writer",
    "HR Manager"
  ];

  return (
    <section className="current-openings py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-7xl font-extrabold mb-4">Current openings</h2>
        <p className="text-xl mb-12">
          Grow with us at 3rd Shade - where creativity and passion thrive.
        </p>
        
        <div className="job-listings">
          {openings.map((job, index) => (
            <JobListing key={index} title={job} />
          ))}
        </div>
        
        <p className="mt-12 text-lg">
          If your profile is not listed above, send your resume <a href="#" className="underline font-semibold">here!</a>
        </p>
      </div>
    </section>
  );
};

export default CurrentOpenings;