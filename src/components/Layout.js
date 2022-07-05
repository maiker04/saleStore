import { Component } from 'react'

const styles = {
  layout: {
    color: '#0A283E',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}
class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={{ width: '100%' }}>
          {this.props.children}
        </div>
      </div>

    )
  }
}

export default Layout
