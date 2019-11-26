import '@flexio-oss/stylist'
import '@flexio-oss/flex-types'
import {ApplicationBuilder} from '@flexio-oss/hotballoon'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {AppStyles} from './styles/AppStyles'
import {FakeLogger, ConsoleLogger} from '@flexio-oss/js-logger'
import {FakeDocument} from './FakeDocument'

export class ApplicationWithStyleFakeDocument {
  /**
   *
   * @param {LoggerInterface} logger
   * @private
   */
  constructor(logger) {
    /**
     *
     * @type {LoggerInterface}
     * @private
     */
    this.__logger = logger

    /**
     *
     * @type {HotBalloonApplication}
     * @private
     */
    this.__application = new ApplicationBuilder()
      .id('Hotballoon-Test-Dummy-ApplicationWithStyle')
      .dispatcher(new TestAppDispatcher(this.__logger))
      .logger(this.__logger)
      .document(new FakeDocument())
      .build()

    /**
     *
     * @type {ThemeStyle}
     * @private
     */
    this.__styles = AppStyles.build(this.__logger)
  }

  /**
   *
   * @return {ApplicationWithStyleFakeDocument}
   */
  static withConsoleLogger() {
    return new ApplicationWithStyleFakeDocument(new ConsoleLogger().debug())
  }

  /**
   *
   * @return {ApplicationWithStyleFakeDocument}
   */
  static withoutLogger() {
    return new ApplicationWithStyleFakeDocument(new FakeLogger().debug())
  }

  /**
   *
   * @return {HotBalloonApplication}
   */
  application() {
    return this.__application
  }

  /**
   *
   * @return {ThemeStyle}
   */
  styles() {
    return this.__styles
  }

}
