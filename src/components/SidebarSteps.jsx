import React from 'react';

const SidebarSteps = ({ activeSection, setActiveSection }) => {
  const steps = [
    { id: 'hero', num: '01' },
    { id: 'about', num: '02' },
    { id: 'skills', num: '03' },
    { id: 'projects', num: '04' },
    { id: 'experience', num: '05' },
    { id: 'contact', num: '06' }
  ];

  const handleStepClick = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar-steps">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`step-item ${activeSection === step.id ? 'active' : ''}`}
          onClick={() => handleStepClick(step.id)}
        >
          {step.num}
        </div>
      ))}
    </div>
  );
};

export default SidebarSteps;
