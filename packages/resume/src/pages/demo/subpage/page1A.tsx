import { useContext } from 'react'
import { InfoContext, IInfoContext } from '../../../context/page1Context'

let a:unknown;
if (Math.random() > 0.5) {
  a = 0.6
}else {
  a = '0.1'
}

let isNumber = function(num: any): num is number {
  return typeof num === 'number'
}

if (isNumber(a)) {
  let b:number = a;
}

export default function Page1A() {
  const context:IInfoContext = useContext(InfoContext)
  const modifyOrigin = context.modifyOrigin as Function
  const setOrigin = () => {modifyOrigin('page1A')}
  return (
    <div className="page1A"><button onClick={setOrigin}>更改</button>{context.origin}</div>
  )
}