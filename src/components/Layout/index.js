import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import * as S from './styled'
import GlobalStyles from '../../styles/global'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <TransitionPortal level="top">
        <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
      <S.LayoutMain>{children}</S.LayoutMain>
      <TransitionPortal level="top">
        <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
