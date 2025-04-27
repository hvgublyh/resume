import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { InfoContext } from "../../context/page1Context"
// import Page1A from './subpage/page1A'
import Page1A from '@/pages/demo/subpage/page1A'
import { useState } from 'react'
import { message } from 'antd'


export default function Page1() {
  const [origin, setOrigin] = useState('page1')
  const [clickState, setClickState] = useState({ num: 0 })
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  const goPage2 = () => {
    setClickState({ num: clickState.num + 1 })
    if (clickState.num < 3) {
      messageApi.info(`当前点击次数为${clickState.num}`);
      return
    }
    // navigate('/page2') // navigate to page2
    // navigate(-1) // back navigation
    // navigate(1) // forward navigation
    // navigate('/page1', {replace: true}) // replace navigation
    navigate('/page2', { state: 'page1' }) // state parameter
    // navigate('/page2?origin=page1') // 问号形式 parameter
    // navigate('/page2/123') // 子路由携带 parameter

  }
  const modifyOrigin = (origin: string) => {
    setOrigin(origin)
  }
  return (
    <InfoContext.Provider value={{ origin, modifyOrigin }}>
      {contextHolder}
      <Page1A></Page1A>
      <div className="demo">
        <button className="demo" onClick={goPage2}>Page2</button>
        {/* 嵌套路由 */}
        <Outlet />
      </div>
    </InfoContext.Provider>
  )
}