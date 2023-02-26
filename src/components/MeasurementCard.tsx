import styled from 'styled-components'
import { type IMeasurement } from '../services/auth'
import Flex from './ui/Flex'
import Text from './ui/Text'

interface Props {
  measurement: IMeasurement
}

const MeasurementCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff78;
  width: 100%;
  border-radius: 10px;
  border: 2px solid #fff4f4;
  padding: 1rem;
  box-shadow: 0px 0px 20px 10px #45454554;
  gap: 10px;
`

export default function MeasurementCard({ measurement }: Props): JSX.Element {
  return (
    <MeasurementCardDiv>
      <Flex gap="1rem">
        <Text fontSize="3rem">{measurement.year}</Text>
        <Flex flexDirection="column">
          <Text>{measurement.type.name}</Text>
          <Text>{measurement.variety.name}</Text>
          <Text>{measurement.color}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>ALC: {measurement.alcohol} %</Text>
        <Text>pH: {measurement.ph} pH</Text>
        <Text>Cº: {measurement.temperature}º</Text>
      </Flex>
      {measurement.observations !== '' && (
        <Text>{measurement.observations}</Text>
      )}
    </MeasurementCardDiv>
  )
}
