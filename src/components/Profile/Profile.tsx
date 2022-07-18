import Image from '../../img/cafesao.jpg'

export default function Profile() {
  return (
    <div className="avatar">
      <div className="w-32 rounded-full">
        <img src={Image} />
      </div>
    </div>
  )
}
