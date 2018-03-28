import './style.css'
import 'jstree/src/themes/default/style.css'
import 'jstree'
import angular from 'angular'
let component = {
  template: '<div></div>',
  controller: JsTreeController,
  bindings: {
    treeConfig: '<?',
    treeData: '<?',
    treeEventsObj: '<?',
    treeCreated: '&'
  }
}

JsTreeController.$inject = ['$element', '$log']
function JsTreeController($element, $log) {
  let ctrl = this
  let tree
  ctrl.$onInit = function () {
  }

  ctrl.$postLink = function () {
    tree = $element.find('div')
    ctrl.treeCreated({instance: tree})
    // 开始监控变化
    ctrl.$onChanges = function (obj) {
      if (obj.treeData && obj.treeData.currentValue) {
        destroy()
        init()
      }
    }
  }
  /**
   * 初始化
   */
  function init() {
    $log.debug('reconfig tree ....')
    let config = {}
    if (ctrl.treeConfig) {
      config = angular.extend({}, ctrl.treeConfig)
    }
    if (!config.core) {
      config.core = {}
    }
    config.core.data = ctrl.treeData
    tree.jstree(config)
    manageTreeEvent()
  }

  function destroy() {
    $log.debug('destroy tree ...')
    tree.jstree('destroy')
  }

  /**
   * 添加事件监听
   */
  function manageTreeEvent() {
    if (ctrl.treeEventsObj) {
      for (let key in ctrl.treeEventsObj) {
        tree.on(key + '.jstree', ctrl.treeEventsObj[key])
      }
    }
  }
}
angular.module("ng.jstree", []).component('jsTree', component)

export default 'ng.jstree'