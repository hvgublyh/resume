
// import { Button } from "antd";
import { Button } from '@resume/components'
import { useNavigate } from "react-router-dom";
import { alertTime } from '@resume/utils'


export default function Page2A({ parentName }: { parentName: string | undefined }) {
  const navigate = useNavigate()
  return (
    <div className="page2A">
      <Button ></Button>
    </div>
  )
}