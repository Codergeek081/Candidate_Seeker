// import React from 'react';

// const SavedCandidates = () => {
//   const savedUsersString = localStorage.getItem('savedUsers');
//   const savedUsers: any[] = savedUsersString ? JSON.parse(savedUsersString) : [];

//   const handleReject = (login: string) => {
//     const updatedUsers = savedUsers.filter(user => user.login !== login);
//     localStorage.setItem('savedUsers', JSON.stringify(updatedUsers));
//     window.location.reload(); // You can replace with state for smoother UX
//   };

//   return (
//     <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
//       <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Potential Candidates</h1>
//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.cell}>Image</th>
//             <th style={styles.cell}>Name</th>
//             <th style={styles.cell}>Location</th>
//             <th style={styles.cell}>Email</th>
//             <th style={styles.cell}>Company</th>
//             <th style={styles.cell}>Bio</th>
//             <th style={styles.cell}>Reject</th>
//           </tr>
//         </thead>
//         <tbody>
//           {savedUsers.map((user, index) => (
//             <tr key={index} style={{ height: '90px' }}>
//               <td style={styles.cell}>
//                 <img src={user.avatar_url} alt="avatar" style={styles.avatar} />
//               </td>
//               <td style={styles.cell}>
//                 <strong>{user.name || user.login}</strong>
//                 <br />
//                 <em>({user.login})</em>
//               </td>
//               <td style={styles.cell}>{user.location}</td>
//               <td style={styles.cell}>
//                 <a href={`mailto:${user.email}`} style={styles.email}>
//                   {user.email}
//                 </a>
//               </td>
//               <td style={styles.cell}>{user.company}</td>
//               <td style={styles.cell}>{user.bio}</td>
//               <td style={styles.cell}>
//                 <button onClick={() => handleReject(user.login)} style={styles.rejectButton}>
//                   &minus;
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   table: {
//     margin: '0 auto',
//     borderCollapse: 'collapse',
//     width: '95%',
//     backgroundColor: 'black',
//     fontSize: '1.1rem',
//   },
//   avatar: {
//     width: '65px',
//     height: '65px',
//     borderRadius: '8px',
//   },
//   email: {
//     color: 'lightblue',
//     textDecoration: 'none',
//   },
//   rejectButton: {
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadius: '50%',
//     border: 'none',
//     width: '35px',
//     height: '35px',
//     fontSize: '22px',
//     cursor: 'pointer',
//   },
//   cell: {
//     padding: '12px 10px',
//   },
// };

// export default SavedCandidates;
