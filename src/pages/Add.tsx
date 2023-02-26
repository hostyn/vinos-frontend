/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Modal from '../components/Modal'
import Button from '../components/ui/Button'
import Flex from '../components/ui/Flex'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Text from '../components/ui/Text'
import Title from '../components/ui/Title'
import { COLORS } from '../config/constants'
import {
  getTypes,
  getVarieties,
  postMeasurement,
  type IVarietyAndType,
} from '../services/auth'

interface IMeasurement {
  year: string
  variety: string
  type: string
  color: string
  temperature: string
  alcohol: string
  ph: string
  observations: string
}

const StyledLink = styled(Link)`
  background: white;
  font-family: Sentient;
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.primary};
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 9999px;
  transition: 0.1s;
  background-color: transparent;
  border: 2px solid ${COLORS.primary};

  :hover {
    scale: 1.04;
  }
`

export default function Add(): JSX.Element {
  const navigate = useNavigate()
  const [varieties, setVarieties] = useState<IVarietyAndType[]>([])
  const [types, setTypes] = useState<IVarietyAndType[]>([])
  const [measurement, setMeasurement] = useState<IMeasurement>({
    year: '',
    variety: '',
    type: '',
    color: '',
    temperature: '',
    alcohol: '',
    ph: '',
    observations: '',
  })

  const [error, setError] = useState<IMeasurement>({
    year: '',
    variety: '',
    type: '',
    color: '',
    temperature: '',
    alcohol: '',
    ph: '',
    observations: '',
  })

  const handleNumberChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (target.value === '') {
      setMeasurement(measurement => ({ ...measurement, [target.name]: '' }))
      return
    }

    const newValue = target.value.replaceAll(',', '.')

    if (!/^[0-9]*\.?[0-9]*$/.test(newValue)) return
    setMeasurement(measurement => ({
      ...measurement,
      [target.name]: newValue,
    }))
  }

  const handleYearChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (target.value === '') {
      setMeasurement(measurement => ({ ...measurement, [target.name]: '' }))
      return
    }
    if (!/^[0-9]*$/.test(target.value)) return
    setMeasurement(measurement => ({
      ...measurement,
      [target.name]: target.value,
    }))
  }

  const handleTextChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setMeasurement(measurement => ({
      ...measurement,
      [target.name]: target.value,
    }))
  }

  const handleSelectChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>): void => {
    setMeasurement(measurement => ({
      ...measurement,
      [target.name]: target.value,
    }))
  }

  const validateData = (): boolean => {
    let anyError = false

    if (measurement.year === '') {
      setError(error => ({ ...error, year: 'Obligatorio' }))
      anyError = true
    }

    if (measurement.color === '') {
      setError(error => ({ ...error, color: 'Obligatorio' }))
      anyError = true
    }

    if (measurement.temperature === '') {
      setError(error => ({ ...error, temperature: 'Obligatorio' }))
      anyError = true
    }

    if (measurement.alcohol === '') {
      setError(error => ({ ...error, alcohol: 'Obligatorio' }))
      anyError = true
    }

    if (measurement.ph === '') {
      setError(error => ({ ...error, ph: 'Obligatorio' }))
      anyError = true
    }

    return anyError
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const error = validateData()
    if (error) return

    postMeasurement({
      ...measurement,
      year: parseInt(measurement.year),
      temperature: parseFloat(measurement.temperature),
      alcohol: parseFloat(measurement.alcohol),
      ph: parseFloat(measurement.ph),
    })
    navigate('/')
  }

  useEffect(() => {
    getVarieties().then(varieties => {
      setVarieties(varieties)
      setMeasurement(measurement => ({
        ...measurement,
        variety: varieties[0]._id,
      }))
    })

    getTypes().then(types => {
      setTypes(types)
      setMeasurement(measurement => ({ ...measurement, type: types[0]._id }))
    })
  }, [])

  return (
    <Modal onSubmit={handleSubmit}>
      <Title fontSize="1.5rem">Añadir medida</Title>

      <Text margin="10px 0 0 0">Año</Text>
      <Input
        color={error.year ? COLORS.error : COLORS.primary}
        padding="2px"
        placeholder="2000"
        value={measurement.year}
        name="year"
        onChange={handleYearChange}
      />

      <Text margin="10px 0 0 0">Variedad</Text>
      <Select
        value={measurement.variety}
        name="variety"
        onChange={handleSelectChange}
      >
        {varieties?.map(item => {
          return (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          )
        })}
      </Select>

      <Text margin="10px 0 0 0">Tipo</Text>
      <Select
        value={measurement.type}
        name="type"
        onChange={handleSelectChange}
      >
        {types?.map(item => {
          return (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          )
        })}
      </Select>

      <Text margin="10px 0 0 0">Color</Text>
      <Input
        color={error.color ? COLORS.error : COLORS.primary}
        padding="2px"
        placeholder="Tinto"
        value={measurement.color}
        name="color"
        onChange={handleTextChange}
      />

      <Text margin="10px 0 0 0">Temperatura</Text>
      <Input
        color={error.temperature ? COLORS.error : COLORS.primary}
        padding="2px"
        placeholder="23.5"
        value={measurement.temperature}
        name="temperature"
        onChange={handleNumberChange}
      />

      <Flex gap="1rem">
        <Flex flexDirection="column">
          <Text margin="10px 0 0 0">Graduación</Text>
          <Input
            color={error.alcohol ? COLORS.error : COLORS.primary}
            padding="2px"
            placeholder="5.2"
            value={measurement.alcohol}
            name="alcohol"
            onChange={handleNumberChange}
          />
        </Flex>

        <Flex flexDirection="column">
          <Text margin="10px 0 0 0">PH</Text>
          <Input
            color={error.ph ? COLORS.error : COLORS.primary}
            padding="2px"
            placeholder="3.1"
            value={measurement.ph}
            name="ph"
            onChange={handleNumberChange}
          />
        </Flex>
      </Flex>

      <Text margin="10px 0 0 0">Observaciones</Text>
      <Input
        padding="2px"
        placeholder="Observaciones"
        value={measurement.observations}
        name="observations"
        onChange={handleTextChange}
      />

      <Flex margin="1rem 0 0 0" justifyContent="space-between">
        <StyledLink to="/">Cancelar</StyledLink>
        <Button padding="5px 15px">Añadir</Button>
      </Flex>
    </Modal>
  )
}
