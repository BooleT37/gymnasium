'use strict';

import './app.css';
import './css/customScroll.css';
import './css/header.css';
import './css/nav.css';
import '../components/Modal/modal.css';


import Velocity from 'velocity-animate';
import 'babel-polyfill';

import {triggerClickEvent} from '../utils';
import RoutingManager from './RoutingManager';


if (process.env.DEBUG) {
  require('./css/design.css');
  require('./css/fonts.css');
} else {
  require('./css/fonts.production.css');
}


class App {
  setUpAutoscrollers() {
    function openLink(id) {
        var element = document.getElementById(id);
        var image = element.getElementsByClassName("nav_element_image")[0];
        var h = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
        var navElementHeightHalf = 91;
        var offset = -(h / 2 - navElementHeightHalf);
        Velocity(image, "scroll", { container: document.body, easing: "ease", offset: offset});

        setTimeout(function() { triggerClickEvent(element); }, 400)
    }

    var links = document.getElementsByClassName("header_link");
    Array.from(links).forEach((el, i) => {el.onclick = openLink.bind(null, el.getAttribute('data-linkTo'))});
  }

  setUpDesignSwitchButton() {
    var designSwitchButton = document.getElementById("designSwitchButton");
    if (!designSwitchButton)
      return;
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
    var routingManager = new RoutingManager();
    routingManager.run();
  }

  setUpParallax() {
    const screenHeight = 3671;
    const clientHeight = window.document.documentElement.clientHeight;
    
    const layersProps = [
      {
        image: document.getElementsByClassName("parallax_0")[0],
        imageHeight: 2797,
        containerHeight: 3346,
        containerOffsetBottom: 325
      },
      {
        image: document.getElementsByClassName("parallax_1")[0],
        imageHeight: 1382,
        containerHeight: 1550,
        containerOffsetBottom: 0
      }
    ];

    var layers = layersProps.map(layerProps => {
        return {
          image: layerProps.image,
          containerHeight: layerProps.containerHeight,
          imageHeight: layerProps.imageHeight,
          containerOffsetBottom: layerProps.containerOffsetBottom,
          distanceToContainer: screenHeight - layerProps.containerOffsetBottom - layerProps.containerHeight,
          containerExtraHeightClient: layerProps.containerHeight - clientHeight,
          containerExtraHeightImage: layerProps.containerHeight - layerProps.imageHeight
      }
    });

    function setOffset() {
      layers.forEach((layer, i) => {
          var offset = (window.pageYOffset - layer.distanceToContainer) * layer.containerExtraHeightImage / layer.containerExtraHeightClient;
          layer.image.style.transform = `translate3d(0px, ${offset}px, 0px)`;
      })
    }

    window.addEventListener("scroll", setOffset);
    setOffset();
  }
  
  run() {
    this.setUpAutoscrollers();
    this.setUpDesignSwitchButton();
    this.setUpRouter();
    this.setUpParallax();
  }
}

var app = new App();
app.run();