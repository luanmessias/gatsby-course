import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan('large')`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 1rem;
    border-bottom: 1px solid var(--borders);
    border-right-width: 0px;
    z-index: 999;
  `}
`

export const SidebarLinks = styled.section`
  ${media.lessThan('large')`
    transition: all 0.5s ease 0s;
    background-color: var(--background);
    position: fixed;
    top: 4rem;
    bottom: 4rem;
    left: 0;
    height: calc(100vh - 8rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0vw)' : 'translateX(-100vw)'};
  `}
`
