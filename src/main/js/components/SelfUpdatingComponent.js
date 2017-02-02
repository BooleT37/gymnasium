'use strict';

import React from 'react';

/*
    Component that updates every time store updates its state or it receives new props
    Method onPropsChange and properties store and lazyLoadStoreAction are required to be defined for each inheritor
*/
export default class SelfUpdatingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }    

    componentWillMount() {
        this.onComponentUpdate(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.onComponentUpdate(nextProps);
    }

    onComponentUpdate(newProps) {
        this.lazyLoadStoreAction();
        this.onPropsChange(newProps);
    }

    componentDidMount() {
        this.unsubscribeFromStore = this.store.listen(this.onStoreLoaded.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribeFromStore();
    }

    onStoreLoaded() {
        this.onPropsChange(this.props);
    }

    onPropsChange(props) {
        throw new Error("Method onPropsChange isn't defined!");
    }
}