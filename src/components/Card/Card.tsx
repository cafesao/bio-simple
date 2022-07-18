import { IconType } from 'react-icons'

interface IProps {
  text: string
  Icon: IconType
  link: string
}

export default function Card({ text, Icon, link }: IProps) {
  return (
    <button
      className="btn glass w-64 my-5"
      onClick={() => window.open(link, '_blank')}
    >
      <Icon size={'30px'} style={{ paddingRight: '5px' }} /> {text}
    </button>
  )
}
