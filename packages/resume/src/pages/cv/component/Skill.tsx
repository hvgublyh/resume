import { useSelector } from 'react-redux'
import { TypeStore } from '../../../redux/TypeStore';
import './css/skill.module.scss'

function Skill() {
  const skill: Array<String> = useSelector((state: TypeStore) => state.userState.message.skills)

  return (
    <div className='skill'>
      <h1>技能</h1>
      <section>
        {skill.map((e) => (
          <p>{e}</p>
        ))}
      </section>
    </div>
  );
}

export default Skill;