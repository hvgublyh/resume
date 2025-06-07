import { Spin } from "antd";

type LoadingProps = {
  readonly message?: string;
}

function Loading({ message = "" }: LoadingProps) {
  return (
    <Spin fullscreen size="large" tip="数据加载中...">
      <div>{message} </div>
    </Spin>
  )
}

export default Loading;