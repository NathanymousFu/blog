'use client'

import Calendar from 'react-github-contribution-calendar'

export default function HeatmapChart({ counts, until }) {
  const panelAttributes = { rx: 6, ry: 6 }
  const weekLabelAttributes = {
    rotate: 20,
  }
  const monthLabelAttributes = {
    style: {
      textDecoration: 'underline',
      fontSize: 10,
      alignmentBaseline: 'central',
      fill: '#AAA',
    },
  }
  const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']

  return (
    <Calendar
      values={counts}
      until={until}
      panelAttributes={panelAttributes}
      weekLabelAttributes={weekLabelAttributes}
      monthLabelAttributes={monthLabelAttributes}
      panelColors={colors}
    />
  )
}
