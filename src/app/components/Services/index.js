import './index.scss'
import { DivContent } from '@/components/DivContent'
import devweb from '@/assets/images/dev-web.webp'
import devmobile from '@/assets/images/dev-mobile.webp'
import devdesktop from '@/assets/images/dev-desktop.webp'
import Image from 'next/image'
import { NavLink } from '@/components/Navigation/navLink'

const DATA_SERVICES = [
  {
    title: 'Desarrollo de aplicaciones móviles',
    description:
      'Lleva tu idea a la palma de la mano de tus clientes con una aplicación móvil que destaque y genere valor.',
    image: devmobile,
    link_to: '/servicios/desarrollo-movil',
    style: {
      borderRadius: '15px',
    },
  },
  {
    title: 'Desarrollo de aplicaciones web',
    description:
      'Destaca en línea con nuestra experiencia en desarrollo web, creando sistemas o sitios web que cautivan y convierten.',
    image: devweb,
    link_to: '/servicios/desarrollo-web',
    style: {
      transform: 'scale(1.07)',
      borderRadius: '15px',
    },
  },
  {
    title: 'Desarrollo de aplicaciones de escritorio',
    description:
      'Optimiza tus operaciones con nuestras soluciones de software de escritorio, diseñadas para tus necesidades específicas.',
    image: devdesktop,
    link_to: '/servicios/desarrollo-escritorio',
    style: {
      borderRadius: '15px',
    },
  },
]

export const Services = () => {
  return (
    <section className="services">
      <div className="services__content">
        {DATA_SERVICES.map((item, index) => (
          <DivContent
            key={index}
            className="services-item-content"
            style={{ ...item.style }}
          >
            <Image src={item.image} alt={item.title} objectFit="cover" />
            <div className="services-content-text">
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <NavLink href={`#services`}>Leer mas</NavLink>
            </div>
          </DivContent>
        ))}
      </div>
    </section>
  )
}
