// filepath: c:\Users\Seidor\Documents\seidor\portal\Portal\src\theme\NavbarItem\index.tsx
import React from 'react';
import DefaultNavbarItem from '@theme-original/NavbarItem';
import CustomNavbarUser from './CustomNavbarUser';




export default function NavbarItem(props) {
  if (props.type === 'custom-navbar-user') {
    return <CustomNavbarUser {...props} />;
  }
  return <DefaultNavbarItem {...props} />;
}