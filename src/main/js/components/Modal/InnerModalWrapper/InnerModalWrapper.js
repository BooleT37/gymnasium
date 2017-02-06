'use strict';

import './InnerModalWrapper.css';

import React from 'react';
import Actions from '../../../actions/Actions';

export default class InnerModalWrapper extends React.Component {
    constructor(props) {
        super(props);
        
        // this.onStoreStateUpdate = this.onStoreStateUpdate.bind(this);
    }

    onStoreStateUpdate(storeState) {
        // ReactDOM.render((
        //     <Modal isOpen={storeState.isShown} contentLabel="InnerModal" className="innerModal">
        //         {storeState.component}
        //     </Modal>), this.node);
        
        // if (storeState.isShown && this.modalNode)
        //     this.modalNode.classList.add('modal_blurred');
        // else
        //     this.modalNode.classList.remove('modal_blurred');
    }

    render() {
        return (
            <div className="innerModalWrapper">
                {this.props.children}
            </div>
        );
    }
}