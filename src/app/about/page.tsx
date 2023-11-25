import '@/styles/p-about.scss'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function About() {
  return (
    <>
      <div className='page1'>
        <h1>
          A Comemore transforma seus eventos, e simplifica suas celebrações.
        </h1>

        <p>
          transforme a organização do seu evento em uma experiência fluida e
          elegante. Simplificamos a confirmação de presença dos seus convidados,
          proporcionando a você total controle sobre a lista de convidados. Faça
          do seu evento uma celebração perfeita com facilidade e praticidade.
        </p>
      </div>
      <div className='page2'>
        <h1>Informe seus convidados</h1>
        <p>
          Com a Comemore, você deixa seus convidados informados com um status
          online de todas as informações disponibilizadas por você, como:
          Endereço, acompanhantes, numero para dúvidas, entre outros.
        </p>
      </div>
      <div className='page3'>
        <h1>Mantenha-se atualizado</h1>
        <p>
          Com nosso sistema online você poderá a partir de um link verificar o
          status de confirmação de seus usuários. Com dados como: Nome, telefone
          e apelido.{' '}
        </p>
      </div>
      <div className='faleconosco'>
        <h1>Fale conosco</h1>
        <ul>
        <li>
          (99) 9999-9999
        </li>
        <li>
          Rua Qualquer, 123,
        </li>
        <li>
          Cidade Qualquer 
        </li>
        <li>
          ola @comemore.com.br
        </li></ul>
        <div className='social'>
          <BsInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </div>
    </>
  )
}
