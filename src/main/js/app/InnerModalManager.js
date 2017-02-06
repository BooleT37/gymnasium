// import React from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import classnames from 'classnames';

// import Actions from '../actions/Actions';
// import InnerModalStateStore from '../stores/InnerModalStateStore';

// export default class InnerModalManager {
//     constructor() {
//         this.node = document.getElementsByClassName("innerModal")[0];
//         this.modalNode = document.getElementsByClassName("modal")[0];


//         this.onStoreStateUpdate = this.onStoreStateUpdate.bind(this);
//     }

//     onStoreStateUpdate(storeState) {
//         ReactDOM.render((
//             <Modal isOpen={storeState.isShown} contentLabel="InnerModal" className="innerModal">
//                 {storeState.component}
//             </Modal>), this.node);
        
//         if (storeState.isShown)
//             this.modalNode.classList.add('modal_blurred');
//         else
//             this.modalNode.classList.remove('modal_blurred');
//     }

//     run() {
//         InnerModalStateStore.listen(this.onStoreStateUpdate);
//     }
// }