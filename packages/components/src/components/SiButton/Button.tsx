import { Button } from 'antd';
import React, { useState } from 'react';

interface SiButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const SiButton: React.FC<SiButtonProps> = ({ children, onClick }) => {
  const [num, setNum] = useState<number>(0);
  const handleClick = () => {
    setNum(num + 1);
    onClick?.();
  };
  return (<Button onClick={handleClick}>{num}{children}</Button>);
};

export default SiButton;