import { Button } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const selectCount = (state: any) => state.count

function Index(props: any) {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  function tick(type: string) {
    dispatch({ type })
  }

  useEffect(() => {
    console.log({ props, count })
  }, [count])

  return (
    <div>
      <Button color='secondary' variant='contained' onClick={() => tick('DECREMENT')}>
        DecrementPlus++++++
      </Button>
      <Button color='primary' variant='contained' onClick={() => tick('INCREMENT')}>
        Increment
      </Button>
    </div>
  )
}

export default Index
