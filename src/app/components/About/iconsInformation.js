import check from '@/assets/icons/check-primary.svg'
import clock from '@/assets/icons/clock-primary.svg'
import file from '@/assets/icons/file-primary.svg'
import users from '@/assets/icons/users-primary.svg'
import Image from 'next/image'

const DATA_ICONS = [
  {
    title: 'Consultores expertos',
    value: 6,
    icon: check,
  },
  {
    title: 'Horas de desarrollo',
    value: 807,
    icon: clock,
  },
  {
    title: 'Clientes satisfechos',
    value: 21,
    icon: users,
  },
  {
    title: 'Proyectos Entregados',
    value: 24,
    icon: file,
  },
]

export const IconsInformationAbout = () => {
  return (
    <section className="icons-info-about">
      {DATA_ICONS.map((item, index) => (
        <div key={index} className="icon-item">
          <Image src={item.icon} alt={item.title} />
          <h2>{item.value}</h2>
          <h4>{item.title}</h4>
        </div>
      ))}
    </section>
  )
}
