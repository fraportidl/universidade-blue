import React from 'react';

import { Button } from '@material-ui/core';

import Link from 'next/link'
import theme from '../theme';

export default function Home() {
  return (
    <div >
      <h1>
        Acesse a pagina de cursos{' '}
        <Link href="/cursos/pagina-principal">
          <a>Ir para cursos</a>
        </Link>
      </h1>
      <Button
        variant="outlined" color="secondary" > Botao</Button>
    </div>
  )
}
