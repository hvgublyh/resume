import { InfoContext } from "@/context/page1Context";
import { Button,message } from "antd";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Page1() {
  const [origin, setOrigin] = useState("page1");
  const [clickState, setClickState] = useState({ num: 0 });
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const goPage2 = () => {
    setClickState({ num: clickState.num + 1 });
    if (clickState.num < 3) {
      messageApi.info(`当前点击次数为${clickState.num}`);
      return;
    }
    navigate("/page2"); // navigate to page2
    navigate(-1); // back navigation
    navigate(1); // forward navigation
    navigate("/page1", { replace: true }); // replace navigation
    navigate("/page2", { state: "page1" }); // state parameter
    navigate("/page2?origin=page1"); // 问号形式 parameter
    navigate("/page2/123"); // 子路由携带 parameter
  };
  const modifyOrigin = useCallback((origin: string) => {
    setOrigin(origin);
  }, [])
  const info = useMemo(() => {
    return { modifyOrigin, origin }
  }, [origin, modifyOrigin])
  return (
    <InfoContext.Provider value={info}>
      <div className="view">
        <div>{contextHolder}</div>
        <div
          className="demo"
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <Button className="demo" onClick={goPage2}>
            Page2
          </Button>
          {/* 嵌套路由 */}
          <Outlet />
        </div>
      </div>
    </InfoContext.Provider>
  );
}
