import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://www.examplewebsite.com/${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsWrapper>
        <S.CommentsTitle>Comentários</S.CommentsTitle>
        <ReactDisqusComments
          shortname="willianjusten"
          identifier={completeURL}
          title={title}
          url={completeURL}
        />
      </S.CommentsWrapper>
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
