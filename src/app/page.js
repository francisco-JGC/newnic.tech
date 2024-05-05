import './page.scss'
import { CButton } from '@/components/CButton'
import { NavLink } from '@/components/Navigation/navLink'
import { SectionPage } from '@/components/SectionPage'
import { ProcessItem } from './components/ProcessItem'
import { Services } from './components/Services'
import timeLapse from '@/assets/images/timelapse-services.webp'
import Image from 'next/image'
import { About } from './components/About'
import { Benefits } from './components/Benefits'

export default function Home() {
  return (
    <div className="home-container" id="home">
      <SectionPage
        title="Transformando Ideas en Soluciones Innovadoras y Tecnológicas"
        description="NewNic es una empresa de desarrollo de software que ofrece soluciones tecnológicas a medida para empresas, destacando por nuestra calidad e innovación para impulsar el éxito empresarial en el mundo digital."
        small="ven y trabaja con nosotros"
        className={'home-section'}
        showBackground={true}
        id="Home"
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
        showBackground={true}
        id="services"
      >
        <Services />
      </SectionPage>

      <SectionPage
        title="Del Concepto a la Realidad Digital Tu Software Personalizado con Integración Perfecta"
        description="Somos totalmente transparentes, por eso tu formaras parte del flujo
        del desarrollo del software"
        small="Por una nueva experiencia"
        className={'services-section'}
        showBackground={true}
      >
        <div className="time-lapse">
          <Image
            src={timeLapse}
            alt="timeLapse"
            objectFit="cover"
            layout="responsive"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </div>
      </SectionPage>

      <SectionPage
        title="Descubre los Beneficios al contratar nuestros servicios"
        description="Al ser cliente de NewNic estas y mas características te beneficiaran a lo largo de tu proyecto,."
        small=""
        positionTitle={'right'}
        className="benefits-section"
        id={'benefits'}
      >
        <Benefits />
      </SectionPage>

      <SectionPage
        title="Impulsando la Innovación Tecnológica con Pasión y Compromiso"
        description=""
        small=""
        className="about-section"
        id="about"
        positionTitle="left"
      >
        <About />
      </SectionPage>
    </div>
  )
}
