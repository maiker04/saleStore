import { Component } from 'react';
import Producto from './Producto'
import * as Allimages from '../images';
import "../index.css";
import { Link } from 'react-router-dom'

class ContenedoresInfo extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props
        let i = 0
        return (
            <div>
                <div className='box__1'>
                    <div className='box__1--text'>
                        <h1 className="welcome">
                            ¡Bienvenido a SaleStore!
                        </h1>
                        <h2 className="slogan">
                            Lo mejor en ropa deportiva y complementos.
                        </h2>
                        <button className='box__1--boton'>
                            ver productos
                        </button>
                    </div>

                    <img className='box__1--img' src="https://www.ibercib.es/wp-content/uploads/2017/08/shutterstock_575822173reducida.jpg" />
                </div>
                <div className='box__2'>
                    <div className='box__2--text'>
                        <h1 className="welcome--box__2">
                            Principales marcas
                        </h1>
                        <div className='img-logo--box__2'>
                            <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1024px-Adidas_Logo.svg.png" />
                            <img className="img-logo" src="https://logos-marcas.com/wp-content/uploads/2020/04/Nike-Logo.png" />
                            <img className="img-logo" src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Reebok.png" />
                            <img className="img-logo" src="https://dpjye2wk9gi5z.cloudfront.net/wcsstore/DportenisStorefrontAssetStore/Attachment/logos/under-armour.jpg" />
                            <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Puma_AG.svg/1200px-Puma_AG.svg.png" />
                        </div>
                    </div>
                </div>
                <div className='box__3'>
                    <div className='box__3--text'>
                        <h1 className="welcome--box__3">
                            PRODUCTOS DESTACADOS
                        </h1>
                        <div className='img-logo--box__3'>
                            <div className="productos home">
                                {productos.map(producto => {
                                    i += 1
                                    if (i <= 5) {
                                        return (
                                            <Producto
                                                agregarAlCarro={agregarAlCarro}
                                                key={producto.name}
                                                producto={producto}
                                            />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <div className='py-5'>
                            <Link to="/Productos"><button className="btn button-shop">Ir a la tienda</button></Link>
                        </div>
                    </div>
                </div>
                <div className='box__4'>
                    <div className='container-box__4'>
                        <div className="col-box__4">
                            <h1 className="text--box__4">
                                CONTAMOS CON SERVICIO DE ENVIO LAS 24 HORAS
                            </h1>
                        </div>
                        <div className='col-box__4'>
                            <img src={Allimages.entrega} className='img-box__4' />
                        </div>
                    </div>
                </div>
                <div className='box__5'>
                    <div className="col-box__5">
                        <input type="text" placeholder="nombre y apellido" className='input-style' />
                        <input type="email" placeholder="Email" className='input-style' />
                        <input type="number" placeholder="telefono" className='input-style' />
                        <textarea type="text" placeholder="descripción" className='input-style-textarea' />
                    </div>
                    <div className='col-container-box__5'>
                        <h2 className='text-box__5'>Compra en tienda y pide tu entrega adomicilio completamente ¡gratis!</h2>
                        <img src="https://gcgroupcompany.com/wp-content/uploads/2020/06/gcgroup-company-contactanos.png" className='img-box__5' />
                    </div>
                </div>
            </div>
        )
    };
}

export default ContenedoresInfo
