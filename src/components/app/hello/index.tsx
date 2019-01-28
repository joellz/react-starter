import React, { ReactElement, StatelessComponent } from 'react'
import './styles.scss'

interface IProps {
  name: string
}

export const HelloWorld: StatelessComponent<IProps> = ({ name }): ReactElement<StatelessComponent> => {
  return (
    <div className='hello-world'>
      <p>Hello, {name}!</p>
    </div>
  )
}