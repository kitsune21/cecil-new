import React, { useEffect } from 'react'

type LoadingProps = {
  time: number
  id: number
}

const Loading = ({ time, id }: LoadingProps) => {
  useEffect(() => {
    const numberOfFrames = 12
    for (let i = 0; i < numberOfFrames; i++) {
      setTimeout(() => {
        const loadingIcon = document.getElementById(`loadingIcon${id}`)
        if (loadingIcon) {
          if (loadingIcon?.textContent === '|') {
            loadingIcon.textContent = '/'
          } else if (loadingIcon?.textContent === '/') {
            loadingIcon.textContent = '-'
          } else if (loadingIcon?.textContent === '-') {
            loadingIcon.textContent = '\\'
          } else {
            loadingIcon.textContent = '|'
          }
        }
      }, (time / numberOfFrames) * i)
    }
    setTimeout(() => {
      const loadingIcon = document.getElementById(`loadingIcon${id}`)
      if (loadingIcon) {
        loadingIcon.textContent = ''
      }
    }, time)
  }, [])

  return <span id={`loadingIcon${id}`}>|</span>
}

export default Loading
