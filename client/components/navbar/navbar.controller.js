'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main',
    'title2': 'Parqueo',
    'state2': 'parqueo'

  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('paraisoCiclistaApp')
  .controller('NavbarController', NavbarController);
