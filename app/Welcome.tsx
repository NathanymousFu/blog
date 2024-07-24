'use client'

import { clsx } from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

export default function Welcome() {
  const { theme } = useTheme()
  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // @ts-ignore
    refContainer.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const welcomeLineClass = clsx('welcome-line', theme === 'dark' && 'welcome-line-dark')

  return (
    <section className="welcome-container" ref={refContainer}>
      <div className="welcome-div">
        <h1 className="welcome-big-title">
          <span className="welcome-text">欢迎</span>来到我的空间，我是一名 TS 全栈开发者{' '}
        </h1>
        <div className="welcome-research">下拉了解更多</div>
        <div className={welcomeLineClass} />
      </div>
    </section>
  )
}
