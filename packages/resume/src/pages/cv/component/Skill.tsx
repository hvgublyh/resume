import './css/skill.module.scss'

import { useSelector } from 'react-redux'

import { TypeStore } from '../../../redux/TypeStore';

function Skill() {
  const skill: string[] = useSelector((state: TypeStore) => state.userState.message.skills)

  return (
    <div className='skill'>
      <h2 className="sectionTitle">技能</h2>
      <section>
        {skill.map((info) => (
          <p key={info}>{info}</p>
        ))}
      </section>
    </div>
  );
}

export default Skill;