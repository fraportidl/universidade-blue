import React from 'react';

import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1>
        Acesse a pagina de cursos{' '}
        <Link href="/cursos/pagina-principal">
          <a>Ir para cursos</a>
        </Link>
      </h1>
    </div>
  )
}
