import { Component } from 'react'
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './Home';
import { NavLink } from "react-router-dom";

const styles = {
  ul: {
    margin: 0,
    padding: 0,
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: 'solid 1px #aaa',
  },
}
class DetallesCarro extends Component {
  render() {
    const { carro } = this.props
    console.log(carro)
    return (
      <div className='detallesCarro'>
        <ul style={styles.ul}>
          {carro.map(x =>
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width='50' height='auto' />
              {x.name} <span>{x.cantidad}</span>
            </li>
          )}
        </ul>
        <div className='botonCarrito'>
          <NavLink to="/Pagar"><button>ir al carrito</button></NavLink>
        </div>
      </div>
    )
  }
}

export default DetallesCarro
