import { useSelector } from "react-redux";

import { TypeEducation } from "../../../assert/ts/MessageType";
import { TypeStore } from "../../../redux/TypeStore";
import css from "./css/education.module.scss";

function Education() {
  const education: TypeEducation[] = useSelector(
    (state: TypeStore) => state.userState.message.educations,
  );
  return (
    <div className={css.education}>
      <h2 className="sectionTitle">教育</h2>
      <section>
        {education.map((info) => (
          <p key={info.school}>
            <span className="time">{info.startTime + "-" + info.endTime}</span>
            <span>{info.school}</span>
          </p>
        ))}
      </section>
    </div>
  );
}

export default Education;
