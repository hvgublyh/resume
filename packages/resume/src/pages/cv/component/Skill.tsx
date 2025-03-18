import { useSelector } from 'react-redux'
import { TypeStore } from '../../../redux/TypeStore';
import './css/skill.module.scss'

function Skill() {
  const skill: Array<String> = useSelector((state: TypeStore) => state.userState.message.skills)

  return (
    <div className='skill'>
      <h2 className="sectionTitle">技能</h2>
      <section>
        {skill.map((e) => (
          <p>{e}</p>
        ))}
      </section>
    </div>
  );
}

export default Skill;