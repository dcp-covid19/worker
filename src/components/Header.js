import React from 'react'; 
import DCPLogo from './DCPLogo';

const LINKS = [
  { label: 'Home', href: 'https://covid19.distributed.computer' },
  { label: 'Researcher', href: 'https://covid19.apps.distributed.computer' },
  { label: 'Worker', href: '#' },
];

const Header = ({ activeLink, hideDivider=false }) => (
  <div>
    <div className="container-fluid d-flex align-items-center justify-content-between p-4">
      <DCPLogo className="ml-4"/>
      <span className="mr-2">
        { LINKS.map(({ label, href }) => (
          <a key={label} href={href} className={`mr-4 header-link ${activeLink === label? 'active' : ''}`}>{ label }</a>
        ))}
      </span>
    </div>
    { !hideDivider && <div className="colored-divider"></div> }
  </div>
)

export default Header;
