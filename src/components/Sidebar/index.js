import React from 'react'

import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => (
  <S.SidebarWrapper>
    <Profile />
    <S.SidebarLinks setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <SocialLinks />
      <MenuLinks />
    </S.SidebarLinks>
  </S.SidebarWrapper>
)

export default Sidebar
