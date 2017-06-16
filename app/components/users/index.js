const ValinorCore = require('valinor-framework-core')

class UserRoute extends ValinorCore.Component.Route {
  constructor (AppLoader, namespace) {
    super(AppLoader, namespace)
    super.build([{
      url: '/test1',
      controller: 'Controller',
      validate: 'Validate'
    }, {
      url: '/test2',
      controller: 'Controller',
      validate: 'Validate'
    }])
  }
}

module.exports = UserRoute
