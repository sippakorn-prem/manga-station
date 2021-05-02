import { useEffect, useState, useMemo, useCallback } from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [todo, setTodo] = useState<object[]>([])
  const [count, setCount] = useState<number>(0)
  const fnRender = useMemo(() => checkRender(), [])
  const a: string = fnRender
  function getNumber(num: number = 12): any {
    console.log(num)
    return `${num + 1}}`
  }

  const getNum = useCallback(getNumber, [])

  async function getList() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res => res.json())
    console.log(res)
  }

  function checkRender(): string {
    console.log('render')
    return 'render'
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={() => setCount(c => c + 1)}>
        test {getNum(count)}
      </button>
    </div>
  )
}
