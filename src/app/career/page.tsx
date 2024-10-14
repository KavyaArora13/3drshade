import React from 'react';
import CareerHero from './components/CareerHero';
import CareerDifference from './components/CareerDifference';
import FamilyNotCompany from './components/FamilyNotCompany';
import WorkCulture from './components/WorkCulture';
import BenefitsSection from './components/BenefitsSection';
import LifeAtShade from './components/LifeAtShade';
import CurrentOpenings from './components/CurrentOpenings';

const CareerPage = () => {
  return (
    <div className="career-page">
      {/* Your header component would go here */}
      <CareerHero />
      <CareerDifference />
      <FamilyNotCompany />
      <WorkCulture />
      <BenefitsSection />
      <LifeAtShade />
      <CurrentOpenings />
      {/* Other sections of the career page would follow */}
    </div>
  );
};

export default CareerPage;