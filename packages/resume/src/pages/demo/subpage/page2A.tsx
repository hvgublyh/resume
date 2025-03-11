
// import { Button } from "antd";
import { Button } from '@vueapps/components'
import { useNavigate } from "react-router-dom";
import { alertTime } from '@vueapps/utils'


export default function Page2A({ parentName }: { parentName: string | undefined }) {
  const navigate = useNavigate()
  return (
    <div className="page2A">
      <Button ></Button>
    </div>
  )
}