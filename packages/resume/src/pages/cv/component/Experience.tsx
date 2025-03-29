import { useSelector } from 'react-redux'
import { TypeExperience } from '../../../assert/ts/MessageType'
import { TypeStore } from '../../../redux/TypeStore';
import css from './css/experience.module.scss'

function Experience() {
  const experiences: Array<TypeExperience> = useSelector((state: TypeStore) => state.userState.message.experiences)

  return (
    <div className={css.experiences}>
      <h2 className="sectionTitle">经历</h2>
      {experiences.map((experience) => (
        <div className='experience'>
          <div className='info'>
            <div className='fl company'>{experience.company}</div>
            <div className='fr startTime'>{experience.startTime + '-' + experience.endTime}</div>
          </div>
          {experience.project.map((project) => (
            <div className='project'>
              <div className='name'>{project.name}</div>
              <p>
                <div className='title'>技术栈</div>
                <div className='detail'>
                  {project.tech.join('、')}
                </div>
              </p>
              <p>
                <div className='title'>详情</div>
                <div className='detail'>{project.introduce}</div>
              </p>

              <p>
                <div className='title'>职责</div>
                <div className='detail'>{project.duty}</div>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Experience;