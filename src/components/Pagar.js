import { Component } from 'react';
import "../index.css";
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
    containerButtons: {
        justifyContent: 'center',
        padding: '15px 0px'
    },
    botonPagar: {
        background: '#fdb913',
        color: 'black',
        padding: '10px',
        marginRight: '10px',
        border: 'none',
        fontWeight: '700',
        borderRadius: '5px'
    },
    botonSeguirC: {
        background: '#1a1c2e',
        color: 'white',
        padding: '10px',
        border: 'none',
        fontWeight: '700',
        borderRadius: '5px'
    }
}
class Pagar extends Component {
    render() {
        const { carro } = this.props
        return (
            <div>
                <h1 className='details'>Detalles del carrito</h1>
                <div className='pagar-styles'>
                    <div className='productosCheck'>
                        <table className='tabla-articulos'>
                            <tr>
                                <th></th>
                                <th width="160">Articulo</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>total</th>
                            </tr>
                            {carro.map(x =>
                                <tr>
                                    <td><img alt={x.name} src={x.img} width='50' height='auto' /></td>
                                    <td>{x.name}</td>
                                    <td>{x.cantidad}</td>
                                    <td>${x.price}</td>
                                    <td>${Number(x.cantidad) * Number(x.price)}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                    <div className='productosTotal'>
                        <table className='tabla-articulos resumen'>
                            <tr>
                                <th>Total a pagar</th>
                            </tr>
                            {carro.map(x =>
                                <tr>
                                    <td><span>{x.name}</span> <span>${Number(x.cantidad) * Number(x.price)}</span></td>
                                </tr>
                            )}
                            <tr className='final-table'>
                                <td><span>Total a pagar</span> <span>$300</span></td>
                            </tr>
                            <tr>
                                <td style={styles.containerButtons}><button style={styles.botonPagar}> PAGAR </button> <button style={styles.botonSeguirC}> SEGUIR COMPRANDO </button></td>
                            </tr>
                        </table>
                        <p className='text-info'>Pruebe cualquier producto sin riesgos. Ofrecemos una garantía de devolución de dinero de 30 días líder en la industria, sin importar el motivo. Pruebe cualquiera de nuestros productos para ver si son adecuados para usted.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pagar