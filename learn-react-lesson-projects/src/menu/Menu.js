// https://dev.to/cooljasonmelton/build-this-cool-dropdown-menu-with-react-react-router-and-css-39ln

import React from 'react';
import MenuItem from './MenuItem';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const Menu = (props) => {
  const navigate = useNavigate();

  console.log(props);

  // render each menu item after Menu button clicked
  const colorArr = ['#9b5de5', '#f15bb5', '#00BBF9'];

  let colorCounter = -1;
  const closeMenu = () => {
    props.toggeOpen(false);
  };
  // takes route string as parameter
  const pushToRoute = (route) => {
    navigate(route);
    closeMenu();
  };

  return props.data.map((item, index) => {
    // if counter is over 2, resets to 0
    // for colorArr bracket notation to get sequence of colors
    colorCounter < 2 ? colorCounter++ : (colorCounter = 0);

    // dynamic styles for each menu item
    const color = colorArr[colorCounter];

    return (
      <MenuItem
        key={index.toString().length === 1 ? `0${index}` : `${index}`}
        color={color}
        index={index}
        name={item.name}
        route={item.route}
        pushToRoute={pushToRoute}
      />
    );
  });
};

export default withRouter(Menu);
