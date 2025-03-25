import React from 'react';
import { Card as AntCard } from 'antd';

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, icon, onClick }) => {
  return (
    <AntCard
      title={title}
      hoverable
      onClick={onClick}
      cover={
        <div style={{ height: 140, background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {icon}
        </div>
      }
    >
      <AntCard.Meta description={description} />
    </AntCard>
  );
};

export default Card;
