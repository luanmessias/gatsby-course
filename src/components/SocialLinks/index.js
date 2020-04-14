import React from 'react'

import Icons from './icons'
import links from './content'

import * as S from './styled'

const SocialLinks = () => (
  <S.SocialIconsWrapper>
    <S.SocialIconsList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialIconsItem key={i}>
            <S.SocialIconsLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialIconsLink>
          </S.SocialIconsItem>
        )
      })}
    </S.SocialIconsList>
  </S.SocialIconsWrapper>
)

export default SocialLinks
