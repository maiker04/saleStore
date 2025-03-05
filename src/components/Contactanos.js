import { Component } from 'react';
import "../index.css";

class Contactanos extends Component {
    render() {

        return (
            <div className='box__5'>
                <div className="col-box__5">
                    <input type="text" placeholder="nombre y apellido" className='input-style' />
                    <input type="email" placeholder="Email" className='input-style' />
                    <input type="number" placeholder="telefono" className='input-style' />
                    <textarea type="text" placeholder="descripción" className='input-style-textarea' rows={10} />
                </div>
                <div className='col-container-box__5'>
                    <img src="https://image.freepik.com/vector-gratis/contactanos_23-2148171940.jpg" className='img-box__5' />
                </div>
            </div>
        )
    }
}

export default Contactanos