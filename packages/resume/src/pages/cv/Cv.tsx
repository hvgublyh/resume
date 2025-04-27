import Education from "./component/Education";
import Experience from "./component/Experience";
import Header from "./component/Header";
import Skill from "./component/Skill";
import css from "./css/cv.module.scss"; 

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
