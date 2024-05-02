import { TitleSection } from '@/components/TitleSection'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="home-container" id="home">
      <section className="home-content">
        <TitleSection
          title="Transformando Ideas en Soluciones Innovadoras y Tecnológicas"
          description="NewNic es una empresa de desarrollo de software que ofrece soluciones tecnológicas a medida para empresas, destacando por nuestra calidad e innovación para impulsar el éxito empresarial en el mundo digital."
          small="ven y trabaja con nosotros"
        />
      </section>
    </div>
  )
}
