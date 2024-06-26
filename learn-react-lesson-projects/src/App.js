import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Menu from './menu/Menu';
import menuItemsList from './menu/menuItemsList';

export default function App() {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.App}>
      <div className={styles.navbar}>
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => setOpenMenu(!openMenu)}
          >
            Menu <i className="fa fa-caret-down"></i>
          </button>
          {openMenu && (
            <div className={styles.dropdownContent}>
              <Menu data={menuItemsList} toggeOpen={setOpenMenu} />
            </div>
          )}
        </div>
      </div>
      <Routes>
        {menuItemsList.map((item, index) => {
          const key = index.toString().length === 1 ? `0${index}` : `${index}`;
          return <Route key={key} path={item.route} element={item.component} />;
        })}
      </Routes>
    </div>
  );
}
