import { Component } from 'react';
import ContenedoresInfo from './ContenedoresInfo';

class Home extends Component {
    render() {
        const agregarAlCarro = this.props.agregarAlCarro;
        const productos = this.props.productos;
        // const { productos, agregarAlCarro } = this.props

        return (
            <div>
                <ContenedoresInfo
                    agregarAlCarro={agregarAlCarro}
                    productos={productos}
                />
            </div>
        )
    };
}

export default Home
