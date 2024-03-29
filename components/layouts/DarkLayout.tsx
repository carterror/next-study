import { FC, ReactNode } from "react"

type Props = {
  children: string | ReactNode | ReactNode[]
}


export const DarkLayout: FC<Props> = ({ children } ) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0, 0, 0)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark Layout</h3>
        <div>{children}</div>
    </div>
  )
}
