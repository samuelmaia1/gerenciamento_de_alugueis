import { useState } from 'react'
import { Link } from '@chakra-ui/react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div className="application">
        <main className="main">
          <header className='application-header'>
            <nav className='application-header-navbar'>
              <Link className='application-header-navbar-link'>Início</Link>
              <Link className='application-header-navbar-link'>Materiais</Link>
              <Link className='application-header-navbar-link'>Aluguéis</Link>
              <Link className='application-header-navbar-link'>Clientes</Link>
            </nav>
          </header>
          <div className='apresentation'>
            <h1>Bem vindo ao gerenciador de Aluguéis!</h1>
            <p>Selecione a opção desejada: </p>
            <div className="apresentation-options">
              <Link className='apresentation-options-link'>Cadastro</Link>
              <Link className='apresentation-options-link'>Entrar</Link>
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
