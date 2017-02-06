'use strict';

import './ModalWrapper.css';

import React from 'react';
import classnames from 'classnames';

export default class ModalWrapper extends React.Component {
    render() {
        return (
            <div className={classnames("modalWrapper", {modalWrapper_blurred: this.props.innerModalOpened === true})}>
                {this.props.children}
            </div>
        );
    }
}