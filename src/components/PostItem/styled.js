import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import media from 'styled-media-query'

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: var(--background);
    box-shadow: 0 0 0 1px var(--borders);
  }

  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan('large')`
    flex-direction: column;
    align-items: start;
    padding: 1rem;
    body#grid & {
      padding: 1rem;
    }
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  background: ${props =>
    props.background ? props.background : 'var(--highlight)'};
  border-radius: 50%;
  color: var(--postColor);
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan('large')`
    font-size: 1rem;  
    border-radius: 5px;
    min-width: inherit;
    min-height: inherit;
    padding: 5px;
    margin-bottom: 1rem;

    body#grid & {
      margin-bottom: 1rem;
    }

  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin-left: 0rem;
  `}
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  ${media.lessThan('large')`
    margin: 0.2rem 0 0.5rem;
    body#grid & {
      margin: 0.2rem 0 0.5rem;
    }
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
