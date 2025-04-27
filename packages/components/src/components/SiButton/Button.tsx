import { Button } from 'antd';
import { ReactNode, useState, } from 'react';

type SiButtonProps = {
  readonly children?: ReactNode;
  readonly onClick?: () => void;
}
const defaultHandler = () => {
  console.log('default handler');
}

function SiButton({ children = undefined, onClick = defaultHandler }: SiButtonProps) {
  const [number, setNumber] = useState<number>(0);
  const handleClick = () => {
    setNumber(number + 1);
    onClick();
  };
  return (<Button onClick={handleClick}>{number}{children}</Button>);
};

export default SiButton;