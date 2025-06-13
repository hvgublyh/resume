import React from "react";

const Education = React.lazy(() => import("./component/Education"));
const Experience = React.lazy(() => import("./component/Experience"));

import { TypeStore } from "@/redux/TypeStore";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Header from "./component/Header";
import Skill from "./component/Skill";
import css from "./css/cv.module.scss";


function CV() {
  const count = useSelector((state: TypeStore) => state.userState.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({
      type: 'counter/increment',
    });
  }
  return (
    <div className={css.cv}>
      <Button onClick={increase} style={{ display: 'none' }}>{count}</Button>
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
