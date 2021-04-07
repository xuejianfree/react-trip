import { useState } from "react"

const a = 1
const DemoState = (props) => {
  /* number为此时state的读取值，setNumber为派发更新的函数 */
  // let [number, setNumber] = useState(0)
  /* useState 第一个参数如果是函数 则处理复杂的逻辑 ，返回值为初始值 */
  let [number, setNumber] = useState(() => {
    return a === 1 ? 1 : 2
  })
  return (
    <div>
      <span>{ number }</span>
      <button onClick={ () => {
        setNumber(number + 1)
        console.log(number) // 这里的number不及时改变
      } }>点我</button>
    </div>
  )
}

export default DemoState
