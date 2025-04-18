import Header from './component/Header'
import Education from './component/Education';
import Skill from './component/Skill';
import Experience from './component/Experience';

import css from './css/cv.module.scss'

function CV() {
  return (
    <div className={css.cv}>
      <Header />
      <section>
        <Education />
      </section>

      <section>
        <Skill />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}

export default CV;