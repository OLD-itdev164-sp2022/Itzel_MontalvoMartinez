import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex } from 'rebass'
import styled, { ThemeConsumer } from 'styled-components'
//import { Search } from 'styled-icons/feather'
import { H1 } from '../Heading'
import { SearchButton } from '../Button'
//import { IconButton } from '../Button'
import { Section } from '../Section'

//import * as React from "react"
//import PropTypes from "prop-types"
//import { Link } from "gatsby"

const Outer = styled.header`
  //background: ${props => props.theme.header.backgroundColor};
  background: ${({ theme }) => theme.variats.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

/*const H1 = styled.h1`
  margin: 0px;
`*/

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  /*&:hover {
    color: purple;
  }*/
  margin: 0 10px;
`

const Image = styled.img`
  margin: 0;
`

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  @media (max-width: 450px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Inner>
    <Section flex>
      <Section width={1/12}>
      flex flexDirection="column" justifyContent="center">
      <ThemeConsumer>
        {theme => <Image src={theme.images.mainHeaderImage} />}
      </ThemeConsumer>
      </Section>
      <Section width={11/12}>
        //<IconButton icon={<Search />} variant='contrast' />
      flex flexDirection="column" justifyContent="center"
      <Nav>
        <Title>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Title>
        <MediaQuery>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </MediaQuery>
        <SeacrchButton variant="contrast" />
      </Nav>
      </Section>
    </Section>
    </Inner>
  </Outer>
  /*<header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>*/
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
