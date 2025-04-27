import { Card as AntCard } from 'antd';

export type CardProps = {
  readonly description: string;
  readonly icon?: React.ReactNode;
  readonly onClick?: () => void;
  readonly title: string;
}
const defaultHandler = () => {
  console.log('default handler');
}
function Card({ description, icon = "", onClick = defaultHandler, title }: CardProps) {
  return (
    <AntCard
      cover={
        <div style={{ alignItems: 'center', background: '#f0f2f5', display: 'flex', height: 140, justifyContent: 'center' }}>
          {icon}
        </div>
      }
      hoverable
      onClick={onClick}
      title={title}
    >
      <AntCard.Meta description={description} />
    </AntCard>
  );
};

export default Card;
