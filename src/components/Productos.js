import { Component } from 'react'
import Producto from './Producto'
import '../index.css';

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props

    return (
      <div className="productos padding-x tienda">
        {productos.map(producto =>
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />)}
      </div>
    )
  }
}

export default Productos
