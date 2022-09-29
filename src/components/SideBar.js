import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
// import Box from '@mui/material/Box';
// import FooterNavlinks from './FooterNavlinks';
// import SideLinks from './SideLinks';
// import logo from '../assets/images/doc.png';
// import { SideBarStyle } from './Styles';
import SideBarMenu from './SideBarMenu';

function SideBar() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const hundleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  const closeMobile = () => {
    setNavbarOpen(!navbarOpen);
    if (navbarOpen) {
      document.body.classList.add('active-nav');
    } else {
      document.body.classList.remove('active-nav');
    }
  };

  return (
    <>
      <section className="Sidemenu">
        <button className="humbergur" type="button">
          {navbarOpen ? <MdMenu onClick={() => hundleNavbarToggle()} />
            : <MdClose className="close" onClick={() => hundleNavbarToggle()} />}
        </button>
        <div>
          { !navbarOpen && <SideBarMenu closeMobile={closeMobile} /> }
        </div>
      </section>
    </>
  );
}

export default SideBar;
