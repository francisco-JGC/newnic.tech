'use client'
import './index.scss'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

export const TitleSection = ({
  title,
  description,
  small,
  titleSize = 'h3',
  positionTitle = 'center',
}) => {
  const POSITIONS_TITLE = {
    center: {
      textAlign: 'center',
      alignItems: 'center',
    },
    left: {
      textAlign: 'left',
      alignItems: 'flex-start',
    },
    right: {
      textAlign: 'right',
      alignItems: 'flex-end',
    },
  }

  useEffect(() => {
    ScrollReveal().reveal('.title-section-small', {
      duration: 500,
      origin: 'top',
      distance: '30px',
    })

    ScrollReveal().reveal('.title-section-h', {
      duration: 900,
      origin: 'top',
      distance: '20px',
    })
  }, [])

  return (
    <section
      className="title-section"
      style={{
        ...POSITIONS_TITLE[positionTitle],
      }}
    >
      <small className="title-section-small">{small}</small>
      {titleSize === 'h1' ? (
        <h1
          style={{
            fontSize: '2em',
          }}
          className="title-section-h"
        >
          {title}
        </h1>
      ) : (
        <h2
          style={{
            fontSize: '1.4em',
          }}
          className="title-section-h"
        >
          {title}
        </h2>
      )}
      <p className="title-description">{description}</p>
    </section>
  )
}
