import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, withRouter } from 'react-router';
import Modal from 'react-modal';

import ModalWrapper from '../components/Modal/ModalWrapper/ModalWrapper';
import InnerModalWrapper from '../components/Modal/InnerModalWrapper/InnerModalWrapper';
import GraduateClass from '../components/GraduateClass/GraduateClass';
import GraduateEdit from '../components/GraduateEdit/GraduateEdit';
import Teachers from '../components/Teachers/Teachers';
import Administration from '../components/Administration/Administration';
import Souvenirs from '../components/Souvenirs/Souvenirs';
import SouvenirsEnlargedPhoto from '../components/Souvenirs/SouvenirsEnlargedPhoto/SouvenirsEnlargedPhoto'
import SouvenirOrder from '../components/SouvenirOrder/SouvenirOrder';
import HistoryEvents from '../components/HistoryEvents/HistoryEvents';
import HistoryEventsMedia from '../components/HistoryEvents/HistoryEventsMedia/HistoryEventsMedia';
import HistoryEventsPhoto from '../components/HistoryEvents/HistoryEventsMedia/HistoryEventsPhoto/HistoryEventsPhoto';
import HistoryEventsVideo from '../components/HistoryEvents/HistoryEventsMedia/HistoryEventsVideo/HistoryEventsVideo';
import Traditions from '../components/Traditions/Traditions';

class EmptyModal extends React.Component {
  render() {
    <Modal isOpen={false} contentLabel="Modal"></Modal>
  }
}

function modalWrapper(Component) {
  return React.createClass({
      componentWillMount: function() {
        this.onComponentUpdate(this.props);
      },
      componentWillReceiveProps: function(newProps) {
        this.onComponentUpdate(newProps);
      },
      onComponentUpdate: function(newProps) {
        var prms = newProps.route.additionalParams;
        if (prms)
          for (var key in prms)
            if (prms.hasOwnProperty(key))
              newProps.params[key] = prms[key];
      },
      render: function() {
        return (
          <Modal isOpen={true} contentLabel="Modal" className="modal">
            <ModalWrapper innerModalOpened={false}>
              <Component params={this.props.params}/>
            </ModalWrapper>
          </Modal>
        )
      }
  });
}

function innerModalWrapper(ModalComponent, InnerModalComponent) {
  return React.createClass({
      componentWillMount: function() {
        this.onComponentUpdate(this.props);
      },
      componentWillReceiveProps: function(newProps) {
        this.onComponentUpdate(newProps);
      },
      onComponentUpdate: function(newProps) {
        var prms = newProps.route.additionalParams;
        if (prms)
          for (var key in prms)
            if (prms.hasOwnProperty(key))
              newProps.params[key] = prms[key];
      },
      render: function() {
        return (
            <Modal isOpen={true} contentLabel="Modal" className="modal">
              <ModalWrapper innerModalOpened={true}>
                <ModalComponent params={this.props.params}/>
              </ModalWrapper>
              <InnerModalWrapper className="innerModal">
                <InnerModalComponent params={this.props.params}/>
              </InnerModalWrapper>
            </Modal>
          );
      }
  });
}

class HistoryEventsPhotoWrapper extends React.Component {
  render() {
    return (
      <HistoryEventsMedia type="photo" params={this.props.params}/>
    )
  }
}

class HistoryEventsVideoWrapper extends React.Component {
  render() {
    return (
      <HistoryEventsMedia type="video" params={this.props.params}/>
    )
  }
}

//todo redirect somewhere home from wrong routes
export default class RoutingManager {
    run() {
        render((
            <Router history={hashHistory}>
                <Route path="/graduateClasses(/:classId(/graduates(/:graduateId)))" component={modalWrapper(GraduateClass)}/>
                <Route path="/graduateClasses/:classId(/graduates(/:graduateId))/addGraduate" component={modalWrapper(GraduateEdit)}/>
                <Route path="/teachers(/:teacherId)" component={modalWrapper(Teachers)}/>
                <Route path="/administration(/:employeeId)" component={modalWrapper(Administration)}/>
                <Route path="/souvenirs" component={modalWrapper(Souvenirs)}/>
                <Route path="/souvenirs/enlarge/:souvenirId" component={innerModalWrapper(Souvenirs, SouvenirsEnlargedPhoto)}/>
                <Route path="/souvenirs/order/:souvenirId" component={modalWrapper(SouvenirOrder)}/>
                <Route path="/history(/:eventId)" additionalParams={{type: "history"}} component={modalWrapper(HistoryEvents)}/>
                <Route path="/history/:eventId/photo/(:index)" additionalParams={{type: "history"}} component={innerModalWrapper(HistoryEvents, HistoryEventsPhotoWrapper)}/>
                <Route path="/history/:eventId/video/(:index)" additionalParams={{type: "history"}} component={innerModalWrapper(HistoryEvents, HistoryEventsVideoWrapper)}/>
                <Route path="/traditions" component={modalWrapper(Traditions)}/>
                <Route path="/traditions/:type(/:eventId)" component={modalWrapper(HistoryEvents)}/>
                <Route path="/traditions/:type/:eventId/photo/(:index)" component={innerModalWrapper(HistoryEvents, HistoryEventsPhotoWrapper)}/>
                <Route path="/traditions/:type/:eventId/video/(:index)" component={innerModalWrapper(HistoryEvents, HistoryEventsVideoWrapper)}/>
                <Route path="*" component={null}/>
            </Router>
        ), document.getElementsByClassName('ReactModalPortal')[0]);
    }
}