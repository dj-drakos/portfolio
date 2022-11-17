import styled from 'styled-components'
import SectionContent from './SectionContent'

const StyledCareer = styled(SectionContent)`
  --top-offset: calc(var(--stack-block300) + var(--header100) - var(--stack-offset));
  --section-height: var(--section-tall);
  z-index: 2;
  top: calc(var(--stack-block300) + var(--header100) - var(--stack-offset) - var(--section-tall));
  height: var(--section-height);
  background-color: ${({ theme }) => theme.bg3 };
  border-bottom: .05rem solid ${({ theme }) => theme.bg3 };
  border-bottom-left-radius: 1rem;
  
  h4 {
    top: calc(var(--stack-start) + var(--stack-block200));
  }
  
  .content {
    margin-bottom: var(--stackblock300);
  }

  .social {
    position: sticky; 
    top: calc(var(--header100) + var(--stack-block200));
    height: var(--gap100);
    display: flex; 
    flex-direction: row;
    align-items: center;
    column-gap: var(--gap100);
    margin-top: var(--gap100);
    margin-left: var(--gap150);

    img {
      width: 1.9rem;
      filter: ${({ theme }) => theme.type === 'dark' &&' invert(72%) sepia(95%) saturate(2%) hue-rotate(202deg) brightness(97%) contrast(84%)'};
    } 

    a:hover:not(.resume) {
    border-style: none;
    }

    .resume {
      color: inherit;
      font-size: larger;
      font-family: 'Source Code Pro', monospace;
      font-weight: 600;
      text-transform: uppercase;
      border: .1rem solid transparent;

      :hover {
      border-bottom: .1rem ${({ theme }) => theme.color } solid;
      }
    }
  }

`

const Career = (props) => {
  return (
    <StyledCareer title="career" {...props}>
      <p>
        As a kid, I coded for fun, but didn't see a career in it. So, naturally, I went to <a href="https://pnca.willamette.edu" rel="noreferrer" target="_blank">art school</a> instead.
      </p>

      <p>
        I eventually found my place leading a <a href="https://wholesale.eggpress.com/" rel="noreferrer" target="_blank">team</a> of tireless, brilliant humans to revive the lost craft of letterpress printing at modern industry scale. The work demanded constant learning, ingenuity and reinvention. We were good at it, turning hundred-year-old machines headed to the scrap yard into the workhorses of a multi-million dollar factory.
      </p>

      <p>
        After ten years, I was ready to hang up my apron, hand off the passwords to my hand-rolled MRP tools, and return to code. 
      </p>

      <p>
        In April 2021, I enrolled in <a href="https://www.alchemycodelab.com/" target="_blank" rel="noreferrer">Alchemy Code Lab</a> to study fullstack software development, then was hired onto the instruction team after graduation.
      </p>

      <p>
        I'm currently looking for my next fullstack opportunity with a preference toward front-end development in React.
      </p>

      <div className="social">
        <a className="resume" href="https://www.dropbox.com/s/y7i3001iydza7sf/dj-drakos-resume.pdf?dl=0" target="blank">Resume PDF</a>
        <a href="https://github.com/dj-drakos" rel="noreferrer" target="_blank">
          <img className="github" src={require('../assets/github.png')} alt="Github Profile" />
        </a>
        <a href="https://www.linkedin.com/in/dj-drakos/" rel="noreferrer" target="_blank">
          <img className="linkedin" src={require('../assets/linkedin.png')} alt="LinkedIn Profile" />
        </a>
        <a href="mailto:devin.josi.drakos+portfolio@gmail.com?subject=I saw your portfolio, let's chat!">
          <img className="email" src={require('../assets/email.png')} alt="Send an Email" />
        </a>
      </div>
    </StyledCareer>
  )
}

export default Career

 //tooltip professional practices
//<p>
//<strong>Debugging:</strong> repairing a worn relay that connects the light beam safety guard on the paper trimmer, using a water-stained photocopy of a wiring diagram from 1967 in German.
//</p> 
//<a target="_blank" href="https://icons8.com/icon/K5fFJa77Yo3h/email">Email</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>