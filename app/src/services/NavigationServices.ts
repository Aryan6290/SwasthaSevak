import {DrawerActions} from '@react-navigation/native';
import React from 'react';
export const navigationRef = React.createRef();
// add this function
function openDrawer(routeName, params) {
  navigationRef.current.dispatch(DrawerActions.openDrawer());
}

export default {
  ...// and export it
  openDrawer,
};
