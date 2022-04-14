import Nav from 'components/Nav'
import normalize from 'emotion-normalize'
import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'
import { HashRouter } from 'react-router-dom'
import CleanCodeRouter from './routes'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        height: auto;
      `}
    >
      {children}
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Global
        styles={css`
          ${normalize}
        `}
      />
      <Layout>
        <Nav />
        <CleanCodeRouter />
      </Layout>
    </HashRouter>
  )
}
