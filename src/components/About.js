import { forwardRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components'
import SectionContent from './SectionContent'

const StyledAbout = styled(SectionContent)`
  --top-offset: calc(var(--stack-block400) + var(--header100) - var(--stack-offset));
  --section-height: var(--section-tall);
  z-index: 1;
  top: calc(var(--stack-block400) + var(--header100) - var(--stack-offset) - var(--section-tall));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg4};
  border-bottom: .1rem solid hsla(250, 70%, 60%, .01);
  border-bottom-left-radius: 1rem;

  h4 {
    top: calc(var(--stack-start) + var(--stack-block300));
  }

  .content {
    margin-bottom: var(--stack-block400);
  }
`

const About = forwardRef((props, ref) => {
  const themeContext = useContext(ThemeContext);
  return (
    <StyledAbout ref={ref} title="about" {...props}>
      <p>"Toolbox?"</p>

      <p>Portfolio v0.1.0 built on the React 18 library, deployed on Netlify</p>

      <p>The sticky scroll is a hand-rolled React hook built using CSS and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" rel="noreferrer" target="_blank">Intersection Observer API</a></p>

      <p>Radix Tooltip?</p>
      
      <p>Lighthouse score, Accessibility considerations</p>
      
      <p><a href="https://www.flaticon.com/authors/syafii5758" rel="noreferrer" target="_blank">Weather Icons</a></p>
      <p>{ themeContext.type === 'dark' ? '🤍' :  '🖤'} to the <a href="https://radious.pro/" rel="noreferrer" target="_blank">Radious</a> crew for the bio pic and workspace for the day</p>
    </StyledAbout>
  )
})
export default About

//<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by pictogramer - Flaticon</a>

//<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Aldo Cervantes - Flaticon</a>