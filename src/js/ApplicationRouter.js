import {ApplicationBuilder} from '@flexio-oss/hotballoon/src/js/Application/ApplicationBuilder'
import {Dispatcher} from '@flexio-oss/hotballoon'
import {StandAloneHistoryClient} from '@flexio-oss/js-history-client'
import {RouterBuilder} from '@flexio-oss/js-router/src/js/RouterBuilder'
import {UrlExchanger} from '@flexio-oss/js-url-exchanger'
import {ComponentRouterBuilder} from '@flexio-corp/component-router/src/js/ComponentRouterBuilder'

export class ApplicationRouter {
  /**
   * @param {LoggerInterface} logger
   */
  constructor(logger){
    this.__logger = logger

    this.__APP = new ApplicationBuilder()
      .logger(logger)
      .dispatcher(new Dispatcher(logger))
      .id('TEST')
      .build()

    this.__history = new StandAloneHistoryClient()
    this.__router = RouterBuilder.build(
      RouterBuilder.urlConfigurationBuilder()
        .protocol('http')
        .hostname('test')
        .pathname('test')
        .build()
    )

    this.__urlExchanger = new UrlExchanger(this.__history, this.__router, this.__APP.dispatcher(), this.app.addComponentContext())

    this.__componentRouter = new ComponentRouterBuilder()
      .componentContext(this.__APP.addComponentContext())
      .historyClient(this.__history)
      .router(this.__router)
      .urlExchanger(this.__urlExchanger)
      .build()
  }

  /**
   * @returns {LoggerInterface}
   */
  get logger() {
    return this.__logger
  }

  /**
   * @returns {HotBalloonApplication}
   */
  get app() {
    return this.__APP
  }

  /**
   * @returns {StandAloneHistoryClient}
   */
  get history() {
    return this.__history
  }

  /**
   * @returns {Router}
   */
  get router() {
    return this.__router
  }

  /**
   * @returns {UrlExchanger}
   */
  get urlExchanger() {
    return this.__urlExchanger
  }

  /**
   * @returns {ComponentRouterPublic}
   */
  get componentRouter() {
    return this.__componentRouter
  }
}
