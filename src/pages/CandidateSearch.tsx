// import { useState, useEffect } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
// import { useNavigate } from 'react-router-dom';
// import Card from '../components/Card';

// const CandidateSearch = () => {
//   const navigate = useNavigate();

//   const [users, setUsers] = useState<any>(null);
//   const [userIndex, setUserIndex] = useState(0);
//   const [user, setUser] = useState<any>(null);
//   const savedUsers = localStorage.getItem('savedUsers');

//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await searchGithub();
//       const userInfo = await searchGithubUser(data[0].login);
//       setUsers(data);
//       setUser({ ...data[0], ...userInfo });
//     };
//     getUsers();

//     if (savedUsers === null) {
//       const initialArray: any = [];
//       localStorage.setItem('savedUsers', JSON.stringify(initialArray));
//     } else {
//       localStorage.setItem('savedUsers', JSON.stringify([])); // reset on first page load
//     }
//   }, []);

//   async function add() {
//     const allUsers = savedUsers ? JSON.parse(savedUsers) : [];
//     allUsers.push(user);
//     localStorage.setItem('savedUsers', JSON.stringify(allUsers));

//     const nextIndex = userIndex + 1;
//     setUserIndex(nextIndex);
//     if (users[nextIndex]) {
//       const userInfo = await searchGithubUser(users[nextIndex].login);
//       setUser({ ...users[nextIndex], ...userInfo });
//     } else {
//       console.error("Sorry, there are no more users available ;(");
//       navigate('/SavedCandidates');
//     }
//   }

//   async function skip() {
//     const nextIndex = userIndex + 1;
//     setUserIndex(nextIndex);
//     if (users[nextIndex]) {
//       const userInfo = await searchGithubUser(users[nextIndex].login);
//       setUser({ ...users[nextIndex], ...userInfo });
//     } else {
//       console.error("Sorry, there are no more users available ;(");
//       navigate('/SavedCandidates');
//     }
//   }

//   return (
//     <div className="container text-white py-5">
//       <h1 className="text-center mb-5 fw-bold">Candidate Search</h1>

//       <div className="row justify-content-center">
//         {user && <Card user={user} />}
//       </div>

//       <div style={styles.buttonGroup}>
//         <button onClick={skip} style={{ ...styles.circleButton, ...styles.reject }}>
//           &minus;
//         </button>
//         <button onClick={add} style={{ ...styles.circleButton, ...styles.add }}>
//           &#43;
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   buttonGroup: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '2rem',
//     marginTop: '1.5rem',
//   },
//   circleButton: {
//     width: '60px',
    
//     height: '60px',
//     borderRadius: '50%',
//     border: 'none',
//     fontSize: '2rem',
//     color: 'white',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold',
//   },
//   reject: {
//     backgroundColor: 'red',
//   },
//   add: {
//     backgroundColor: 'green',
//   },
// };

// export default CandidateSearch;
