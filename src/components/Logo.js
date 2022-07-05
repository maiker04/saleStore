import { Component } from 'react'
import * as Allimages from '../images';
import '../index.css';
import { Link } from 'react-router-dom'

const styles = {
  logo: {
    fontWeight: '700',
    fontSize: '2rem',
    display: 'Flex'
  }
}

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        <div style={styles.logo}>
          <img src={Allimages.logo} className="logo" />
          <img src={Allimages.shop} className="logoshop" />
          <span className='logoStyle'>SaleStore</span>
        </div>
        <div className='categories'>
          <Link to="/Home">Inicio</Link>
          <Link to="/Productos">Tienda</Link>
          <Link to="/Contactanos">contactanos</Link>
        </div>
      </div>
    )
  }
}

export default Logo
