import React from 'react'

const withModal = (Component) => {

    class ComponentWithModal extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isShowModal: false,
                text: ''
            }
            this.handleToggleModal = this.handleToggleModal.bind(this);
            this.handleModalText = this.handleModalText.bind(this);
        }

        handleToggleModal() {
            this.setState({isShowModal: !this.state.isShowModal})
        }

        handleModalText(text) {
            this.setState({text})
        }

      render() {
        return (
          <>    
            {
                this.state.isShowModal ?

                <div className="overlay">
                    <div className="modal">
                        <p>{this.state.text}</p>
                        <button onClick={this.handleToggleModal}>Aceptar</button>
                    </div>
                </div> : null
            }
                <Component handleModalText={this.handleModalText}  handleToggleModal={this.handleToggleModal}/>
          </>
        )
      }
    }

    return ComponentWithModal;
    
}

export default withModal;