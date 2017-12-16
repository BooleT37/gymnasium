'use strict';

import './SouvenirsEnlargedPhoto.css';

import React from 'react';

import SelfUpdatingComponent from '../../SelfUpdatingComponent';
import PhotoContainer from '../../PhotoContainer/PhotoContainer';

import Actions from '../../../actions/Actions';
import SouvenirsStore from '../../../stores/SouvenirsStore';

export default class SouvenirsEnlargedPhoto extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = SouvenirsStore;
        this.lazyLoadStoreAction = Actions.lazyLoadSouvenirs;

        this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    }

    onPropsChange(props, storeState) {
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        this.setState({
            loaded: true,
            src: "photos/souvenirs/" + this.store.getSouvenirById(this.props.params.souvenirId).photoName
        });
    }

    onCloseButtonClick() {
        Actions.routeTo("/souvenirs");
    }

    render() {
        if (this.state.loaded === false)
            return (<div className="innerModal_loader">Загрузка изображения...</div>);
        return (
            <div className="souvenirsEnlargedPhoto">
                <div className="photoFrame souvenirsEnlargedPhoto_photoFrame">
                    <PhotoContainer height={602}>
                        <img src={this.state.src} alt="photo" className="souvenirsEnlargedPhoto_image"/>
                    </PhotoContainer>
                    <div className="closeButton souvenirsEnlargedPhoto_closeButton" onClick={this.onCloseButtonClick}></div>
                </div>
            </div>
        );
    }
}