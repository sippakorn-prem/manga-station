import { Button } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const selectCount = (state: any) => state.count

function Index(props: any) {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  function tick(type: string): number {
    dispatch({ type })
    return 123456
  }

  useEffect(() => {
    console.log({ props, count })
  }, [count])

  return (
    <div>
      <Button color='secondary' variant='contained' onClick={() => tick('DECREMENT')}>
        Decrement
      </Button>
      <Button color='primary' variant='contained' onClick={() => tick('INCREMENT')}>
        Increment
      </Button>
    </div>
  )
}

export default Index
