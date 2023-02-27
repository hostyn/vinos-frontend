/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../components/Loading'
import MeasurementCard from '../components/MeasurementCard'
import Button from '../components/ui/Button'
import Flex from '../components/ui/Flex'
import { COLORS } from '../config/constants'
import { useAuth } from '../context/authContext'
import { getMeasurements, type IMeasurement } from '../services/auth'

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContent = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  max-width: 90vw;
  gap: 1rem;
`

const StyledLink = styled(Link)`
  background: white;
  font-family: Sentient;
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.primary};
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 9999px;
  margin: 0 0 0 auto;
  transition: 0.1s;

  :hover {
    scale: 1.04;
  }
`

export default function Home(): JSX.Element {
  const { logout } = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  const [measurements, setMeasurements] = useState<IMeasurement[]>([])

  useEffect(() => {
    getMeasurements().then(measurements => {
      setMeasurements(measurements)
      setLoading(false)
    })
  }, [])

  return (
    <HomeDiv>
      <HomeContent>
        <Flex justifyContent="space-between">
          <Button padding="5px 15px" onClick={logout}>
            Cerrar sesión
          </Button>
          <StyledLink to="/add">+ Añadir medida</StyledLink>
        </Flex>

        {loading ? (
          <Loading />
        ) : (
          measurements.map(measurement => (
            <MeasurementCard key={measurement._id} measurement={measurement} />
          ))
        )}
      </HomeContent>
    </HomeDiv>
  )
}
