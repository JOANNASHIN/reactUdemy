import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../contexts/auth-context';

/**
 * context 방법 1
 */
const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

/**
 * context 방법 2
 */
// const Navigation = (props) => {
//   return (
//     <AuthContext.Consumer>
//       {(ctx) => {
//         return (
//           <nav className={classes.nav}>
//             <ul>
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Users</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <a href="/">Admin</a>
//                 </li>
//               )}
//               {ctx.isLoggedIn && (
//                 <li>
//                   <button onClick={props.onLogout}>Logout</button>
//                 </li>
//               )}
//             </ul>
//           </nav>
//         )
//       }}
      
//     </AuthContext.Consumer>
//   );
// };

export default Navigation;
