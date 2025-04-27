import { IInfoContext, InfoContext } from "@/context/page1Context";
import { getDemos, Menu } from "@/services/apiService";
import { KEY_SUCCESS } from "@/services/magic";
import { Card  } from "@resume/components";
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";

export default function Page1A() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const context: IInfoContext = useContext(InfoContext);
  const modifyOrigin = context.modifyOrigin as (origin: string) => void;
  const setOrigin = () => {
    modifyOrigin("page1A");
  };

  useEffect(() => {
    getDemos()
      .then((result) => {
        if (result.code !== KEY_SUCCESS) throw new Error("获取数据失败");
        setMenus(result.data);
      })
      .catch((error:unknown) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="page1A" style={{ display: "flex", gap: 10 }}>
        <Button onClick={setOrigin}>更改</Button>
        <Card description="test" title="test"/>
        {context.origin}
      </div>
      <ul style={{ listStyle: "none" }}>
        {menus.map((menu) => {
          return <li className="menu-name" key={menu.menuId}>{menu.menuName}</li>;
        })}
      </ul>
    </div>
  );
}
