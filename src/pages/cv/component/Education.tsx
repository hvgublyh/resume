import { TypeEducation } from "../../../assert/ts/MessageType";
import { useSelector } from "react-redux";
import { TypeStore } from '../../../redux/TypeStore';
import css from './css/education.module.scss'

function Education() {
  const education: Array<TypeEducation> = useSelector((state: TypeStore) => state.userState.message.educations)
  return (
    <div className={css.education}>
      <h1>教育</h1>
      <section>
        {education.map((e) => (
          <p>
            <span className="time">{e.startTime + '-' + e.endTime}</span>
            <span>{e.school}</span>
          </p>
        ))}
      </section>

    </div>
  );
}

export default Education;