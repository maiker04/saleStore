import { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button className='boton' {...this.props} />
    )
  }
}

export default Button
