'use client'
import '@/styles/p-login.scss'
import Button from '@/components/Button'
import Link from 'next/link'

const handleLogin = () => {
  alert('login')
}

export default function Login() {
  return (
    <div className='p-login'>
      <h1>Conectar-se</h1>
      <form>
        <label>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            placeholder='Senha'
            required
          />
        </label>
        <div className='actions'>
          <Button
            text='Entrar'
            onClick={handleLogin}
          />
          <Button
            text='Criar conta'
            href='/cadastro'
          />
        </div>
        <Link href='#'>Esqueci minha senha</Link>
      </form>
    </div>
  )
}
