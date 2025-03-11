import { useNavigate, useLocation, useSearchParams, useParams  } from "react-router-dom"
import {Link} from 'react-router-dom'
import Page2A from "./subpage/page2A";

export default function Page2() {
  // const params = useParams()
  // const id = params.id; // 子路由携带参数
  // const [param] = useSearchParams()
  // const origin = param.get('origin') // 问号形式传参
  const location = useLocation() 
  const originPage  = location.state as string // state传参
  // const navigate = useNavigate()
  // const back = () => {
  //   navigate(-1) // back navigation
  // }
  return (
    // <Link to={'/page1'}>跳转到page1{originPage}</Link>
    <Page2A parentName={originPage}></Page2A>
    // <button className="demo" onClick={back}>Page2</button>
  )
}