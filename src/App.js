import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contactanos from './components/Contactanos';
import Pagar from './components/Pagar';

class App extends Component {
  state = {
    productos: [
      { name: 'bolso reebok camuflado', price: 80, img: '/productos/bolso.jpg' },
      { name: 'conjunto Adidas talla unica', price: 65, img: '/productos/conjunto.jpg' },
      { name: 'zapatos NIKE air react', price: 100, img: '/productos/zapatos.jpg' },
      { name: 'zapatos Adidas super star', price: 100, img: '/productos/zapatillasAdidas.jpg' },
      { name: 'zapatos Adidas deportivas', price: 100, img: '/productos/zapatillasHombre.jpg' },
      { name: 'bolso reebok camuflado', price: 80, img: '/productos/bolso.jpg' },
      { name: 'conjunto Adidas talla unica', price: 65, img: '/productos/conjunto.jpg' },
      { name: 'zapatos NIKE air react', price: 100, img: '/productos/zapatos.jpg' },
      { name: 'zapatos Adidas super star', price: 100, img: '/productos/zapatillasAdidas.jpg' },
      { name: 'zapatos Adidas deportivas', price: 100, img: '/productos/zapatillasHombre.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render() {
    const { esCarroVisible } = this.state

    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Routes>
            <Route exact path="/Home"
              element={
                <Home
                  agregarAlCarro={this.agregarAlCarro}
                  productos={this.state.productos}
                />}
            />
            <Route exact path="/"
              element={
                <Home
                  agregarAlCarro={this.agregarAlCarro}
                  productos={this.state.productos}
                />}
            />
            <Route exact path="/Productos"
              element={
                <Productos
                  agregarAlCarro={this.agregarAlCarro}
                  productos={this.state.productos}
                />}

            />
            <Route exact path="/Contactanos" element={<Contactanos />} />
            <Route exact path="/Pagar"
              element={
                <Pagar
                  carro={this.state.carro}
                />}
            />
          </Routes>
        </Layout>
      </div>
    )
  }
}

export default App;
