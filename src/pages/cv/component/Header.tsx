import { useSelector } from 'react-redux'
import { TypeHeader } from '../../../assert/ts/MessageType'
import { TypeStore } from '../../../redux/TypeStore';
import css from  './css/header.module.scss'
import img_zhengkj from '../../../assert/images/zhengkj.jpg'

function Header() {
  const header: TypeHeader = useSelector((state: TypeStore) => state.userState.message.header)
  return (
    <div className={css.header + ' clearfix'}>
      <div className="fl">
        <div className="text-center name">
          {header.name}
        </div>
        <ul>
          {header.messages.map(message => (
            <li>{message}</li>
          ))}
        </ul>
      </div>

      <div className='header_img fr'>
          <img src={img_zhengkj} alt="" />
      </div>
    </div>
  );
}

export default Header;