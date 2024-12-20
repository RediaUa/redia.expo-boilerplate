import { ComponentProps, FC } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface Props {
  name: ComponentProps<typeof FontAwesome>['name']
  color: string
}

const TabBarIcon: FC<Props> = (props) => {
  return <FontAwesome size={28} {...props} />
}

export default TabBarIcon
