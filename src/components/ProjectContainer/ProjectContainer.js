import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <GitHubIcon />
        <p>source code</p>
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <LaunchIcon />
        <p>live project</p>
      </a>
    )}
  </div>
)

ProjectContainer.propTypes = {
  project: PropTypes.node.isRequired,
}

export default ProjectContainer
