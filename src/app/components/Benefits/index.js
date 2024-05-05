import './index.scss'

import { CButton } from '@/components/CButton'
import benefits from '@/assets/images/benefits-product.webp'
import { NavLink } from '@/components/Navigation/navLink'
import Image from 'next/image'
import { IconsInformationBenefits } from './iconsInformation'

export const Benefits = () => {
  return (
    <div className="benefits-content">
      <div className="benefits-content__info">
        <p>
          En <strong>NewNic</strong>, estamos aquí para ayudarte a hacer
          realidad tus ideas tecnológicas. Nos dedicamos a proporcionar
          soluciones de software personalizadas que se adaptan a tus necesidades
          específicas. Con un equipo apasionado y comprometido.
        </p>
        <p>
          Trabajamos incansablemente para impulsar la innovación y garantizar el
          éxito de nuestros clientes en el mundo digital. Nuestra prioridad es
          construir relaciones sólidas y duraderas mientras creamos tecnología
          que marque la diferencia en tu negocio.
        </p>

        <CButton typeStyle="modern-button">
          <NavLink href={'#contact'}>Contáctanos</NavLink>
        </CButton>
      </div>
      <div className="benefits-content__img">
        <Image
          src={benefits}
          alt="beneficios newnic"
          objectFit="contain"
          width={400}
          height={300}
        />
      </div>
      <div className="benefits-content__icons">
        <IconsInformationBenefits />
      </div>
    </div>
  )
}
