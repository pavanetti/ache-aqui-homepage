import { CloudUpload } from '@styled-icons/boxicons-regular'
import { FC } from 'react'
import styled from 'styled-components'

interface FileUploaderProps {
  limit?: number
}

export const FileUploader: FC<FileUploaderProps> = ({ limit }) => {
  return (
    <Wrapper>
      <CloudUpload size={48} />
      <div>Faça o upload de imagens aqui</div>
      <div>({limit === 1 ? 'Apenas uma' : 'Máximo ' + limit})</div>
    </Wrapper>
  )
}

FileUploader.defaultProps = {
  limit: 1,
}

const Wrapper = styled.div`
  align-items: center;
  background: #fcfcfc;
  border: 1px dashed #212529;
  color: ${(props) => props.theme.text.primary};
  display: flex;
  flex-direction: column;
  font-size: 12px;
  justify-content: center;
  padding: 24px;
  width: 100%;
  text-align: center;
`
