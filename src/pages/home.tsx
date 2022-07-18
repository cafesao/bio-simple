import Card from '../components/Card/Card'
import Profile from '../components/Profile/Profile'
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaStackOverflow,
} from 'react-icons/fa'

export default function index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Profile />
      <Card
        text={'GitHub'}
        Icon={FaGithubSquare}
        link="https://github.com/cafesao"
      />
      <Card
        text={'Linkedin'}
        Icon={FaLinkedin}
        link="https://www.linkedin.com/in/gabriel-dias-dutra/"
      />
      <Card
        text={'Twitter'}
        Icon={FaTwitter}
        link="https://twitter.com/cafesao29"
      />
      <Card
        text={'StackOverflow'}
        Icon={FaStackOverflow}
        link="https://pt.stackoverflow.com/users/246409/gabriel-dutra"
      />
    </div>
  )
}
