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
