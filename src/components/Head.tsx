import type { ReactNode } from 'react'
import { Helmet } from 'react-helmet-async'
import type { HelmetProps } from 'react-helmet-async'

export type Props = HelmetProps & { children: ReactNode }
const Head = (props: Props) => <Helmet {...props} />

export default Head
