import Link from '@mui/material/Link';
import { SideBarStyle } from './Styles';

const SideLinks = () => {
  const navLinks = [
    { url: '/models', name: 'Add Doctor', id: 1 },
    { url: '/reservation', name: 'Add Reservation', id: 2 },
    { url: '/reservations', name: 'My Reservations', id: 3 },
    { url: '/test_drive', name: 'Delete Doctor', id: 4 },
    { url: '/test_drive', name: 'Sign Out', id: 5 },
  ];

  return (
    <>
      <ul style={SideBarStyle.linkDiv}>
        {
          navLinks.map((nav) => (
            <li style={SideBarStyle.liItem} key={nav.id}>
              <Link
                href={nav.url}
                underline="none"
                sx={SideBarStyle.linkItem}
              >
                {nav.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

// SideLinks.propTypes = {
//   isMobile: PropTypes.bool.isRequired,
//   closeMobile: PropTypes.func.isRequired,
// };

export default SideLinks;
