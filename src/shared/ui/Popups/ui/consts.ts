import { DropdownDirection } from '../../../types'
import cls from './Popup.module.scss'

export const mapDirectionsClass: Record<DropdownDirection, string> = {
  'bottom left': cls.bottomLeft,
  'bottom right': cls.bottomRight,
  'top left': cls.topLeft,
  'top right': cls.topRight,
}
