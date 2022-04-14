import Nav from 'components/Nav'
import normalize from 'emotion-normalize'
import { css, Global } from '@emotion/react'
import { ReactNode } from 'react'

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
    <>
      <Global
        styles={css`
          ${normalize}
        `}
      />
      <Layout>
        <Nav>HMR이 동작하네요!</Nav>
      </Layout>
    </>
  )
}
