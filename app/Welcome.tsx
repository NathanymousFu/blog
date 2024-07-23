'use client'

import { useEffect, useRef } from 'react'

export default function Welcome() {
  const refContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // @ts-ignore
    refContainer.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className="welcome-container" ref={refContainer}>
      <div className="welcome-div">
        <h1 className="welcome-big-title">
          <span className="welcome-text">欢迎</span>来到我的空间，我是一名 TS 全栈开发者{' '}
        </h1>
        <div className="welcome-research">下拉了解更多</div>
        <div className="welcome-line" />
      </div>
    </section>
  )
}
