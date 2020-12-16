import {useState} from 'react'
import styled from 'styled-components/macro'
import Header from '../components/Header'

export default function About() {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div>
      <Header variant="secondary">About</Header>
      {showInfo && <Info>Extra information</Info>}
      <button onClick={() => setShowInfo(true)}>Show info</button>
    </div>
  )
}

const Info = styled.div`
  color: blue;
`
