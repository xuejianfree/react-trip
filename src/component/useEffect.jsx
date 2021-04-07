import { useState, useRef, useEffect } from "react"

function getUserInfo(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: a,
        age: 16
      })
    }, 500)
  })
}

/*
  当组件完成挂载，dom渲染完成，做一些操纵dom,请求数据，那么useEffect是一个不二选择
  如果我们需要在组件初次渲染的时候请求数据，那么useEffect可以充当class组件中的 componentDidMount
  但是特别注意的是，如果不给useEffect执行加入限定条件，函数组件每一次更新都会触发effect
  那么也就说明每一次state更新，或是props的更新都会触发useEffect执行
  此时的effect又充当了componentDidUpdate和componentwillreceiveprops
  所以说合理的用于useEffect就要给effect加入限定执行的条件，也就是useEffect的第二个参数
  这里说是限定条件，也可以说是上一次useeffect更新收集的某些记录数据变化的记忆，在新的一轮更新，
  useeffect会拿出之前的记忆值和当前值做对比，如果发生了变化就执行新的一轮useEffect的副作用函数，useEffect第二个参数是一个数组，用来收集多个限制条件
*/
const Demo = ({ a }) => {
  const [userMessage, setUserMessage] = useState({})
  const div = useRef()
  const [number, setNumber] = useState(0)
  // 模拟事件监听处理函数
  const handleResize = () => {}
  useEffect(() => {
    getUserInfo(a).then(res => {
      setUserMessage(res)
    })
    // 操作dom
    console.log(div.current) // div
    window.addEventListener('resize', handleResize)
    //只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount
  }, [a, number])

  return (
    <div ref={div}>
      <span>{ userMessage.name }</span>
      <span>{ userMessage.age }</span>
      <button onClick={ ()=> setNumber(number + 1) } >{ number }</button>
    </div>
  )
}

export default Demo