'use client'
import './index.scss'
import { DivContent } from '@/components/DivContent'
import cameraVideoIcon from '@/assets/icons/camera-video.svg'
import codeDevIcon from '@/assets/icons/code-dev.svg'
import fileIcon from '@/assets/icons/file.svg'
import Image from 'next/image'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

const DATA_PROCESS_ITEM = [
  {
    title: 'Nos reunimos',
    description:
      'Nos conocemos un poco, y hablamos sobre tu proyecto explorando necesidades y objetivos.',
    icon: cameraVideoIcon,
  },
  {
    title: 'Desarrollamos',
    description:
      'Diseñamos y desarrollamos tu proyecto, siguiendo tus necesidades y objetivos.',
    icon: codeDevIcon,
  },
  {
    title: 'Entregamos',
    description:
      'Entregamos tu proyecto, y te ayudamos a lanzarlo y mantenerlo actualizado.',
    icon: fileIcon,
  },
]

export const ProcessItem = () => {
  useEffect(() => {
    DATA_PROCESS_ITEM.forEach((_, index) => {
      ScrollReveal().reveal(`.process-item-content:nth-child(${index + 1})`, {
        delay: 200 * index,
        duration: 500,
        origin: 'top',
        distance: '30px',
      })
    })
  }, [])
  return (
    <section className="process-item">
      <small>Nuestro proceso</small>

      <div className="process-item__content">
        {DATA_PROCESS_ITEM.map((item, index) => (
          <DivContent key={index} className="process-item-content">
            <Image src={item.icon} alt="icon" />
            <div className="process-item-content-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </DivContent>
        ))}
      </div>
    </section>
  )
}
