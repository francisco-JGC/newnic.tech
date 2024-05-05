import { DivContent } from '../DivContent'
import Image from 'next/image'

export const ContentIcon = ({ icon }) => {
  return (
    <DivContent className="content-icon">
      <Image src={icon} alt="icon" loading="lazy" width={100} height={100} />
    </DivContent>
  )
}
