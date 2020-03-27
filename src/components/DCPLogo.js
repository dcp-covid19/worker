import React from 'react';

const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.31 595.71" height={55}>
    <polygon style={{ fill: '#00a473' }} points="525.31 0 477.51 535.04 262.66 595.71 47.8 535.04 0 0 525.31 0"/>
    <polygon style={{ fill: '#6fc495' }} points="263.22 550.28 437.81 500.9 478.2 41.79 263.22 41.79 263.22 550.28"/>
    <polygon style={{ fill: '#ffde17' }} points="263.22 482.62 263.22 482.75 263.44 482.68 263.22 482.62"/>
    <polygon style={{ fill: '#ffde17' }} points="263.22 412.67 263.22 412.8 263.44 412.73 263.22 412.67"/>
    <polygon style={{ fill: '#fff' }} points="433.4 110.39 421.2 247.9 353.66 247.9 359.89 177.67 262.87 177.67 262.87 110.39 433.4 110.39"/>
    <polygon style={{ fill: '#fff' }} points="341.48 341.15 409.02 341.15 399.92 443.65 262.96 482.62 262.96 412.8 262.96 412.67 337 391.61 341.48 341.15"/>
    <polygon style={{ fill: '#e5e7e7' }} points="262.87 110.39 262.87 177.67 169.27 177.67 188.48 391.61 262.74 412.73 262.96 412.8 262.96 482.62 262.74 482.68 125.56 443.65 95.76 110.39 262.87 110.39"/>
  </svg>
);

const DCPLogo = ({ className }) => (
  <div className={`d-flex align-items-center ${className}`}>
    <LogoSVG />
    <span className="ml-2" style={{ fontSize: '1rem', lineHeight: '1.2rem' }}>DISTRIBUTED<br />COMPUTE LABS</span>
  </div>
);

export default DCPLogo;
