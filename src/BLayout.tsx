import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Head from './components/Head'
import './layout.css'

export default function Layout() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <h1 className="layout">B-Layout</h1>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
