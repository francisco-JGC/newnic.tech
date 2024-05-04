import './page.scss'
import { CButton } from '@/components/CButton'
import { NavLink } from '@/components/Navigation/navLink'
import { SectionPage } from '@/components/SectionPage'
import { ProcessItem } from './components/ProcessItem'

export default function Home() {
  return (
    <div className="home-container" id="home">
      <SectionPage
        title="Transformando Ideas en Soluciones Innovadoras y Tecnológicas"
        description="NewNic es una empresa de desarrollo de software que ofrece soluciones tecnológicas a medida para empresas, destacando por nuestra calidad e innovación para impulsar el éxito empresarial en el mundo digital."
        small="ven y trabaja con nosotros"
        className={'home-section'}
        showBackground={true}
        titleSize="h1"
      >
        <CButton>
          <NavLink href="#contact">Contáctanos</NavLink>
        </CButton>

        <ProcessItem />
      </SectionPage>

      <SectionPage
        title="Nuestros Servicios Exclusivos"
        description="Descubre cómo podemos llevar tu idea al siguiente nivel con nuestros servicios especializados."
        small="Por una nueva experiencia"
        className={'services-section'}
      >
        <div className="services-content"></div>
      </SectionPage>
    </div>
  )
}
