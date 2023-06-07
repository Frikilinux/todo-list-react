import React from 'react'
import oops from '../../assets/oops.png'
import { MainStyled } from '../../components/Layout/StyledLayout'
import { Img404, Section404, Title404 } from './Styled404'
import NavigationLinks from '../../components/NavigationsLinks/NavigationLinks'
import { StyledNavLink } from '../../components/NavigationsLinks/StyledNavigationLinks'

const NotFound404 = () => {
  return (
    <MainStyled>
      <Section404>
        <Img404 src={oops} />
        <Title404>Sorry, page not found 404</Title404>
        <StyledNavLink className={'active'} to={'/'}>Volver al home</StyledNavLink>
      </Section404>
    </MainStyled>
  )
}

export default NotFound404
