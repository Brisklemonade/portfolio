import * as SiIcons from 'react-icons/si'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hello, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}</h2>}
      <p className='about__desc'>{description && description} &#8595;</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <button type='button' className='btn btn--outline'>
              Resume
            </button>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <InstagramIcon />
              </a>
            )}
            {social.tiktok && (
              <a
                href={social.tiktok}
                aria-label='tiktok'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <SiIcons.SiTiktok />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
