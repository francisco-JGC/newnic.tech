import { DivContent } from '../DivContent'
import Image from 'next/image'

export const ContentIcon = ({ icon }) => {
  return (
    <DivContent
      className="content-icon"
      style={{
        width: '50px',
        height: '50px',
        padding: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={icon} alt="icon" loading="lazy" width={25} height={25} />
    </DivContent>
  )
}
