import { useState, useEffect } from 'react'
import { loadProducers } from '../services/loadData'

export default function useProducers(){
  const [title, setTitle] = useState(null)
  const [list, setList] = useState([])

  useEffect(() => {
    const result = loadProducers()
    result.list.sort(
      (producer1, producer2) => producer1.distance - producer2.distance
    )
    setTitle(result.title)
    setList(result.list)
  }, [])

  return [title, list]
}