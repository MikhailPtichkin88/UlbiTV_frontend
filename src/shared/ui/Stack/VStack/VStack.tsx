import { Flex, FlexProps } from '../Flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: HStackProps) => {
  const { align = 'start' } = props
  return <Flex {...props} direction="column" align={align} />
}
