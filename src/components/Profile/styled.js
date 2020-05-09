import styled from 'styled-components'
import { Link } from 'gatsby'
import media from 'styled-media-query'

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const ProfileLink = styled(Link)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    display: flex;
    flex-direction: row;
    align-items: left center;
  `}
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6em;
  margin: 0.5rem auto 1.5rem;
  ${media.lessThan('large')`
    margin: 0rem .5rem;
    font-size: 1.2rem;  
    text-align: left;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  ${media.lessThan('large')`
    font-size: 0.8rem;  
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
  ${media.lessThan('large')`
    display: none;  
  `}
`
