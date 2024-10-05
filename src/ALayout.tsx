import { Suspense } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Head from './components/Head'
import './layout.css'

export default function Layout() {


  const navigate = useNavigate()
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/react.svg" />
      </Head>
      <main>
        <h1 className="layout">A-Layout</h1>
        <h1 className="layout" style={{color: 'orange'}} onClick={() => navigate('/doc')}>to-B-Layout</h1>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
