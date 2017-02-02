'use strict';

import React from 'react';

/*
    Component that fetches data from the corresponding store
    and updates its state every time store updates or it receives new props
    Method onPropsChange(props, storeState) and properties store and lazyLoadStoreAction are required
    to be defined for each inheritor
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
        this.onPropsChange(newProps, this.store.state);
    }

    componentDidMount() {
        this.unsubscribeFromStore = this.store.listen(this.onStoreLoaded.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribeFromStore();
    }

    onStoreLoaded(storeState) {
        this.onPropsChange(this.props, storeState);
    }

    onPropsChange(props, storeState) {
        throw new Error("Method onPropsChange isn't defined!");
    }
}