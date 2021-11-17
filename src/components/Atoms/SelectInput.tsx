import { ChevronDown } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'

export const SelectInput = styled(({ className, ...props }) => (
  <Wrapper className={className}>
    <Input {...props} />
    <SelectChevron />
  </Wrapper>
))``

const Wrapper = styled.div`
  display: flex;
  position: relative;
`

const SelectChevron = styled(ChevronDown)`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 32px;
`

export const Input = styled.select`
  appearance: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 4px;
  color: ${(props) => props.theme.text.primary};
  display: grid;
  font-size: 16px;
  padding: 12px 8px;
  width: 100%;
`
