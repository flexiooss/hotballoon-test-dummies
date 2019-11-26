import '@flexio-oss/stylist'
import '@flexio-oss/flex-types'
import {ApplicationBuilder} from '@flexio-oss/hotballoon'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {FakeLogger, ConsoleLogger} from '@flexio-oss/js-logger'
import {FakeDocument} from './FakeDocument'
import {themeAppFlexio} from '@flexio-corp/theme-app-flexio'

export class ApplicationWithFakeStyleFakeDocument {
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
    this.__styles = themeAppFlexio
  }

  /**
   *
   * @return {ApplicationWithFakeStyleFakeDocument}
   */
  static withConsoleLogger() {
    return new ApplicationWithFakeStyleFakeDocument(new ConsoleLogger().debug())
  }

  /**
   *
   * @return {ApplicationWithFakeStyleFakeDocument}
   */
  static withoutLogger() {
    return new ApplicationWithFakeStyleFakeDocument(new FakeLogger().debug())
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
