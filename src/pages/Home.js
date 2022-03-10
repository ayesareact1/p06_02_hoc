import React, { Component } from 'react'
import withModal from '../hocs/withModal'

class Home extends Component {
    componentDidMount() { // lorem 20
        this.props.handleModalText('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nemo atque cum officia voluptatum ut tempora, aperiam itaque commodi eligendi!');
    }
  
render() {
    return (
      <div className="container">
          <button onClick={this.props.handleToggleModal}>Ver condiciones</button>
      </div>
      
    )
  }
}

export default withModal(Home);
