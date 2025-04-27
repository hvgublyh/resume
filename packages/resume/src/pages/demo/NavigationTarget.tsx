import { Button } from "antd";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Page2() {
  const parameters = useParams();
  const id = parameters.id; // 子路由携带参数
  console.warn(id);
  const [parameter] = useSearchParams();
  const origin = parameter.get("origin"); // 问号形式传参
  console.warn(origin);
  const location = useLocation();
  const originPage = location.state as string; // state传参
  const navigate = useNavigate();
  const back = () => {
    navigate(-1); // back navigation
  };
  return (
    <div>
      <Link to="/page1">跳转到page1{originPage}</Link>
      <Button className="demo" onClick={back}>
        Page2
      </Button>
    </div>
  );
}
