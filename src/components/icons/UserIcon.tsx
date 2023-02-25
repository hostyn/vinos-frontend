import { COLORS } from '../../config/constants'

interface IUserIcon {
  color?: string
  height?: string
  width?: string
}

export default function UserIcon({
  color,
  height,
  width,
}: IUserIcon): JSX.Element {
  return (
    <svg
      width={width ?? '1.5rem'}
      height={height ?? '1.5rem'}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z"
        stroke={color ?? COLORS.primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
