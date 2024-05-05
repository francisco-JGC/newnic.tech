import './index.scss'

import { ContentIcon } from '@/components/ContentIcon'
import idea from '@/assets/icons/idea.svg'
import chart from '@/assets/icons/chart.svg'
import settings from '@/assets/icons/settings.svg'
import speed from '@/assets/icons/speed.svg'
import star from '@/assets/icons/star.svg'
import shield from '@/assets/icons/shield.svg'

const DATA_ICONS = [
  {
    title: 'Seguridad Avanzada',
    description:
      'Implementamos medidas de seguridad robustas para proteger tus datos y garantizar la privacidad de los usuarios.',
    icon: shield,
  },
  {
    title: 'Experiencia Nativa ',
    description:
      'Creamos aplicaciones móviles con interfaces nativas que aprovechan al máximo las capacidades de cada plataforma.',
    icon: star,
  },
  {
    title: 'Rendimiento Optimizado',
    description:
      'Nuestra empresa ofrece soluciones de software que garantizan un rendimiento excepcional, proporcionando a nuestros clientes productos digitales rápidos, fiables y altamente optimizados, impulsando así su presencia en línea y su éxito comercial.',
    icon: speed,
  },
  {
    title: 'Asesoramiento de proyecto',
    description:
      'Te asesoramos en cada paso del desarrollo de tu proyecto, desde la idea inicial hasta la implementación final.',
    icon: idea,
  },
  {
    title: 'Plataformas Múltiples',
    description:
      'Desarrollamos aplicaciones multiplataforma que funcionan en todos los dispositivos y sistemas operativos.',
    icon: chart,
  },
  {
    title: 'Soporte y Actualizaciones Continuas',
    description:
      'Ofrecemos servicios de mantenimiento continuo para garantizar que tu aplicación funcione sin problemas y esté siempre actualizada con las últimas características y mejoras de seguridad.',
    icon: settings,
  },
]

export const Benefits = () => {
  return (
    <section className="icons-info-benefits">
      {DATA_ICONS.map((item, index) => (
        <div key={index} className="icon-item">
          <ContentIcon icon={item.icon} />
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  )
}
