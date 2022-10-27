import styled from 'styled-components'
import Section from './Section'
import ThoughtSpiral from './ThoughtSpiral'
import ToggleThemeButton from './ToggleThemeButton'
import useIntersection from '../hooks/useIntersection'

const StyledHero = styled(Section)`
  min-height: var(--section-short);
  display: grid;
  grid-template-columns: var(--bio-pic100) minmax(var(--bio-pic200), var(--bio-pic300));
  align-items: flex-start;
  column-gap: var(--gap100);

  h1 strong {
  font-family: 'Source Code Pro';
  font-weight: 600;
  letter-spacing: -.03em;
  word-spacing: -.2em;
  }

  p {
    font-weight: 500;
  }

  .wrapper.portrait {
  max-width: var(--bio-pic100);
  max-height: var(--bio-pic100);
  border-radius: 50%;
  overflow: hidden;
} 

  img.portrait {
    max-width: 130%;
    height: auto;
    mix-blend-mode: luminosity;
    object-fit: cover;
    object-position: calc( -1 * var(--gap100)) calc( -1 * var(--gap150));
    opacity: 0.6;
  }

  .tip {
    z-index: 10;
    padding-top: .6rem;
    position: absolute;
    font-family: 'Sanchez';
    font-size: 5rem;
    color: rgb(210, 193, 40);
    transform: translate(-1.4rem, -1.5rem);
    mix-blend-mode: multiply;
    cursor: pointer;
    font-weight: 400;
    opacity: .6;
    -webkit-transition: all .15s linear;
    -moz-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear, opacity .1s;

    :hover {
      opacity: 1;
    }
  }
    

  .fixed {
    position: fixed;
    top: 0;
  }
  `

export default function Hero({currentTheme, toggleTheme, ...props}) {
  const [ nodeRef, referenceRef, isFixed ] = useIntersection()

  return (
    <StyledHero className="hero">
      <ThoughtSpiral />
      <div className="wrapper portrait">
        <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>

      <div className="wrapper bio"> 
        <h1>
          Hi, I’m 
          <strong ref={referenceRef}>
            &nbsp;DJ Drakos!
            <span ref={nodeRef} className={isFixed ? 'tip fixed' : 'tip'}>
              *
            </span>
          </strong> 
        </h1>
        <p>
          I’m a Fullstack Software Engineer/Creative
          <br/ >
          based in 
          <ToggleThemeButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
          Portland, Oregon.
        </p>
        <p>
          I love bringing well-crafted, accessible applications to life
          <br/ >
          using modern, scalable web technologies and design patterns.
        </p>
      </div>
    </StyledHero>
  )
}