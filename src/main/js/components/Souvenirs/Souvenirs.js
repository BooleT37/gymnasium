'use strict';

import './Souvenirs.css';

import React from 'react';
import classnames from 'classnames';

import SelfUpdatingComponent from '../SelfUpdatingComponent';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import ModalHeader from '../Modal/ModalHeader/ModalHeader';
import ModalFooter from '../Modal/ModalFooter/ModalFooter';

import Actions from '../../actions/Actions';
import SouvenirsStore from '../../stores/SouvenirsStore';

const itemsInRow = 3;

export default class Souvenirs extends SelfUpdatingComponent {
    constructor(props) {
        super(props);
        this.store = SouvenirsStore;
        this.lazyLoadStoreAction = Actions.lazyLoadSouvenirs;

        this.shiftListLeft = this.shiftListLeft.bind(this); 
        this.shiftListRight = this.shiftListRight.bind(this); 
    }

    onPropsChange(props, storeState) {
        if (!storeState.loaded) {
            this.setState({ loaded: false });
            return;
        }
        if (storeState.list.length === 0) {
            this.setState({
                loaded: true,
                empty: true
            });
            return;
        }
        this.setState({
            loaded: true,
            list: storeState.list,
            listOffset: storeState.listOffset
        });
    }

    shiftListLeft() {
        Actions.setSouvenirsListOffset(this.state.listOffset - 1);
    }

    shiftListRight() {
        Actions.setSouvenirsListOffset(this.state.listOffset + 1);
    }

    handleItemClick(event) {
        var id = event.currentTarget.getAttribute("data-id");
        //console.log(event.currentTarget.getAttribute("data-id"));
        Actions.routeTo(`/souvenirs/enlarge/${id}`);
    }

    handleBuyButtonClick(event) {
        var id = event.currentTarget.getAttribute("data-id");
        Actions.routeTo(`/souvenirs/order/${id}`)
    }

    render() {
        var state = this.state;
        if (state.loaded === false)
            return (
                <div className="souvenirs">
                    <ModalHeader title="СУВЕНИРЫ" iconType="t-shirt"/>
                    <div className="modal_content">
                        <div className="modal_loader">Загрузка сувениров...</div>
                    </div>
                    <ModalFooter/>
                </div>);
        
        if (state.empty === true)
            return (
                <div className="souvenirs">
                    <ModalHeader title="СУВЕНИРЫ" iconType="t-shirt"/>
                    <div className="modal_content">
                        <div className="modal_empty">Список сувениров пуст. Приносим свои извинения.</div>
                    </div>
                    <ModalFooter/>
                </div>
            );

        function renderItem(obj) {
            var imageElements = obj.photoName ? (
                <div className="souvenirs_itemImage" data-id={obj.id} onClick={this.handleItemClick}>
                    <PhotoContainer height={270}>
                        <img src={`/photos/souvenirs/${obj.photoName}`} alt="image"/>
                    </PhotoContainer>
                    <div className="souvenirs_enlarge"></div>
                </div>
             ) : null;
            return (
                <div className="souvenirs_item" key={obj.id}>
                    <div className="photoFrame souvenirs_itemPhotoFrame" title={obj.photoName ? "" : "Изображение отсутствует"}>
                        {imageElements}
                    </div>
                    <div className="souvenirs_itemName">{obj.name}</div>
                    <div className="button souvenirs_buyButton" data-id={obj.id} onClick={this.handleBuyButtonClick}>КУПИТЬ</div>
                </div>
            )
        }
        var items = state.list.slice(state.listOffset, state.listOffset + itemsInRow).map(it => renderItem.call(this, it));
        return (
            <div className="souvenirs">
                <ModalHeader title="СУВЕНИРЫ" iconType="t-shirt"/>
                <div className="modal_content souvenirs_content">
                    <div className={classnames(
                        "souvenirs_arrow",
                        "arrow_left",
                    {souvenirs_arrow_disabled: state.listOffset === 0}
                    )} onClick={this.shiftListLeft}></div>
                    <div className="souvenirs_items">
                        {items}
                    </div>
                    <div className={classnames(
                        "souvenirs_arrow",
                        "arrow_right",
                    {souvenirs_arrow_disabled: state.listOffset === state.list.length - itemsInRow}
                    )} onClick={this.shiftListRight}></div>
                </div>
                <ModalFooter/>
            </div>
        )
    }

}