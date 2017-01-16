'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, withRouter } from 'react-router'
import GraduateClass from './components/GraduateClass'
import 'babel-polyfill';
import Velocity from 'velocity-animate'
import Modal from 'react-modal'

class EmptyModal extends React.Component {
  render() {
    <Modal isOpen={false} contentLabel="Modal"></Modal>
  }
}

const GraduateClassWithRouter = withRouter(GraduateClass);

class GradClassModal extends React.Component {
  render() {
    return (
      <Modal isOpen={true} contentLabel="Modal" className="modal">
          <GraduateClassWithRouter></GraduateClassWithRouter>
      </Modal>
    )
  }
}

class App {
  run() {
    this.setUpAutoscrollers();
    this.setUpDesignSwitchButton();
    this.setUpRouter();
  }

  setUpAutoscrollers() {
    function scrollTo(id) {
      Velocity(document.getElementById(id), "scroll", { container: document.body, easing: "ease", offset: -200 });
    }

    var autoscrollers = document.getElementsByClassName("header_autoscroller");
    Array.from(autoscrollers).forEach((el, i) => {el.onclick = scrollTo.bind(null, el.getAttribute('data-scrollTo'))})
  }

  setUpDesignSwitchButton() {
    var designSwitchButton = document.getElementById("designSwitchButton");
    var design = document.getElementById("design");
    designSwitchButton.isOn = design.style.display !== "none";

    designSwitchButton.onclick = function() {
      if (this.isOn) {
        design.style.display = "none";
        this.textContent = "Вкл."
        this.isOn = false;
      } else {
        design.style.display = "block";
        this.textContent = "Выкл."
        this.isOn = true;
      }
    }
  }

  setUpRouter() {
    render((
      <Router history={hashHistory}>
        <Route path="/graduateClasses" component={GradClassModal}>
          <Route path=":classId" component={GradClassModal}/>
        </Route>
        <Route path="*" component={null}/>
      </Router>
    ), document.getElementsByClassName('ReactModalPortal')[0]);
  }
}

var app = new App();
app.run();