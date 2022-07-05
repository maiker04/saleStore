import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';
import * as Allimages from '../images';

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div className='container-car'>
        <span className="bubble">
          {cantidad !== 0
            ? <BubbleAlert value={cantidad} />
            : null}
        </span>
        <img src={Allimages.car} onClick={mostrarCarro} style={{ transform: 'scale(-1, 1)' }} className='carrito-mobile' />
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro
