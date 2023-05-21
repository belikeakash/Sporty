import React from 'react'
import '../styles/Header.css'
import Companies from './Companies'
import Slider from './Slider'

export default function Header() {
  const descriptionArray = [
    'We’ve been able to focus on building solid user experiences on top of Radix Primitives. With UI components, there are just too many angles and rabbit holes to cover for product teams that wish to move quickly.', 'Radix has significantly improved the accessibility standard in our components. We spend far less time discussing and implementing keyboard navigation, focus traps, and researching appropriate ARIA techniques for our components.'
  ]
  return (
    <div style={{margin:'20px'}}>
      <div className="header">Case studies</div>
      <div className="title">World-class teams use Radix to power their products</div>
      <div className="companies-box">
        <Companies icon='Vercel' description={descriptionArray[0]} userName='Scott Hutcheson' userImg='https://i.pinimg.com/originals/6a/d5/28/6ad528edd19415a94256ec1d90684d7d.jpg' userPos='Product Engineer at CodeSandbox' />

        <Companies icon='CodeSandBox' description={descriptionArray[1]} userName='Scott Hutcheson' userImg='https://i.pinimg.com/originals/6a/d5/28/6ad528edd19415a94256ec1d90684d7d.jpg' userPos='Product Engineer at CodeSandbox' />
      </div>

      <div className="all-companies">
        <div className="all-comapnies-text" >And dozens more companies</div>
        <Slider />
      </div>
    </div>
  )
}
