import React, { ReactElement, StatelessComponent } from 'react'

export const HelloWorld: StatelessComponent<any> = (): ReactElement<StatelessComponent<any>> => {
  return (
    <div className='hello-world'>
      <p>Hello, world!</p>
    </div>
  )
}