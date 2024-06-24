import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div className="application">
        <main className="main">
          <header className='application-header'>
            <nav className='application-header-navbar'>
              <ChakraLink as={ReactRouterLink} className='application-header-navbar-link'>Início</ChakraLink>
              <ChakraLink as={ReactRouterLink} to='/materiais/adicionar' className='application-header-navbar-link'>Materiais</ChakraLink>
              <ChakraLink as={ReactRouterLink} className='application-header-navbar-link'>Aluguéis</ChakraLink>
              <ChakraLink as={ReactRouterLink} className='application-header-navbar-link'>Clientes</ChakraLink>
            </nav>
          </header>
          <div className='apresentation'>
            <h1>Bem vindo ao gerenciador de Aluguéis!</h1>
            <p>Selecione a opção desejada: </p>
            <div className="apresentation-options">
              <ChakraLink as={ReactRouterLink} className='apresentation-options-link'>Cadastro</ChakraLink>
              <ChakraLink as={ReactRouterLink} className='apresentation-options-link'>Entrar</ChakraLink>
            </div>
          </div>
        </main>
        <footer className='application-footer'>
          Desenvolvido por Samuel Maia
        </footer>
      </div>
    </>
  )
}

export default App
