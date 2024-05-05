'use client'
import './index.scss'
import { CButton } from '@/components/CButton'
import { ContentIcon } from '@/components/ContentIcon'
import { NavLink } from '@/components/Navigation/navLink'
import { useState } from 'react'
import facebook from '@/assets/icons/facebook.svg'
import instagram from '@/assets/icons/instagram.svg'
import linkedin from '@/assets/icons/linkedin.svg'
import clockIcon from '@/assets/icons/clock-primary.svg'
import location from '@/assets/icons/location.svg'
import Image from 'next/image'

export const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, email, service, message })
  }

  return (
    <div className="contact-section">
      <div className="social-media">
        <div className="social-media-icons">
          <NavLink
            href="https://www.facebook.com/newnicsoftware"
            target="_blank"
          >
            <ContentIcon icon={facebook} />
          </NavLink>

          <NavLink
            href="https://www.instagram.com/newnicsoftware/"
            target="_blank"
          >
            <ContentIcon icon={instagram} />
          </NavLink>

          <NavLink
            href="https://www.linkedin.com/company/newnicsoftware/"
            target="_blank"
          >
            <ContentIcon icon={linkedin} />
          </NavLink>
        </div>

        <div className="social-media-locations">
          <div className="contact-info">
            <Image
              src={clockIcon}
              alt="clock"
              loading="lazy"
              width={25}
              height={25}
            />

            <div>
              <h3>Horario de atención</h3>
              <span>Lunes - Viernes: 8:00 am - 5:00 pm</span>
            </div>
          </div>
          <div className="contact-info">
            <Image
              src={location}
              alt="location"
              loading="lazy"
              width={25}
              height={25}
            />

            <div>
              <h3>Ubicación</h3>
              <span>León - Nicaragua </span>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Nombre <span>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Ejemplo: "Juan Pérez"'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Ejemplo: "email@gmail.com"'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">
            Servicio <span>*</span>
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          >
            <option value="" selected disabled>
              Selecciona un servicio
            </option>
            <option value="Soporte Web o Mobile">Soporte Web o Mobile</option>
            <option value="Desarrollo de producto">
              Desarrollo de producto
            </option>
            <option value="Diseño de interfaces UX/UI">
              Diseño de interfaces UX/UI
            </option>
            <option value="Asesoramiento en desarrollo de software">
              Asesoramiento en desarrollo de software
            </option>
            <option value="SEO">SEO</option>
            <option value="Administración de base de datos">
              Administración de base de datos
            </option>
            <option value="Manejo de Redes sociales">
              Manejo de Redes sociales
            </option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Mensaje <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí"
            required
          ></textarea>
        </div>

        <div>
          <CButton>Enviar</CButton>
        </div>
      </form>
    </div>
  )
}
