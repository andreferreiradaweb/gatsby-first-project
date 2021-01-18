import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments';
import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://test.com.br${url}`

  return (
    <S.CommentsWrapper>
      <ReactDisqusComments
        shortname="WillianJusten"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />  
    </S.CommentsWrapper>
  )
}

Comments.prototype = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Comments