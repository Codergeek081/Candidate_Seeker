import { Link } from 'react-router-dom';
// import './Nav.css'; // Optional if you want to separate styling

const Nav = () => {
  return (
    <nav style={{
      position: 'absolute',
    top: '20px',
    left: '20px',
    display: 'flex',
    gap: '1rem',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '500',
    }}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="../SavedCandidates" style={styles.link}>Potential Candidates</Link>
    </nav>
  );
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  }
};

export default Nav;
