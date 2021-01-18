import React from 'react'
import * as S from './styled'
import Icons from './icons'
import Links from './content'


const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {Links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink href={link.url} title={link.label} target="_new" rel="noopener noreferrer">
              <S.IconWrapper>
               <Icon /> 
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks