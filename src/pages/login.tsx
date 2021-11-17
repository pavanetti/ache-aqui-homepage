import Link from 'next/link'
import Button from 'components/Atoms/Button'
import { FieldSet } from 'components/Atoms/FieldSet'
import { Header1 } from 'components/Atoms/Header'
import { Label } from 'components/Atoms/Label'
import TextInput from 'components/Atoms/TextInput'
import styled from 'styled-components'

const LoginPage = () => {
  return (
    <Wrapper>
      <FieldSet>
        <Header1>LOGIN</Header1>

        <Label>E-mail</Label>
        <TextInput placeholder="E-mail" />

        <Label>Password</Label>
        <TextInput placeholder="Password" type="password" />
        <ForgotPassword>
          <a href="/forgot-password">Não lembra?</a>
        </ForgotPassword>
        <Button>Login</Button>

        <Label>
          Não tem cadastro?{' '}
          <Link href="/cadastro">
            <a>Cadastrar-se</a>
          </Link>
        </Label>
      </FieldSet>
    </Wrapper>
  )
}

export default LoginPage

const Wrapper = styled.div`
  margin: 120px 240px;
  max-width: 368px;

  ${FieldSet} {
    align-items: center;
  }

  ${TextInput} {
    width: 100%;
  }

  ${Button} {
    margin: 24px 0;
  }

  a {
    text-decoration: underline;
  }
`

const ForgotPassword = styled(Label)`
  align-self: flex-end;
`
