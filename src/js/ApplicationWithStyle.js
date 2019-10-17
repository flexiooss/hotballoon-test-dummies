import {HotBalloonTestApplication} from './application/HotBalloonTestApplication'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {AppStyles} from './styles/AppStyles'
import {FakeLogger, ConsoleLogger} from '@flexio-oss/js-logger'
import '@flexio-oss/stylist'

export class ApplicationWithStyle {
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
     * @type {HotBalloonTestApplication}
     * @private
     */
    this.__application = new HotBalloonTestApplication(
      'Hotballoon-Test-Dummy-ApplicationWithStyle',
      new TestAppDispatcher(this.__logger),
      this.__logger
    )

    /**
     *
     * @type {AppStylesConfig}
     * @private
     */
    this.__stylesConfig = AppStyles.build(this.__logger)
  }

  /**
   *
   * @return {ApplicationWithStyle}
   */
  static withConsoleLogger() {
    return new ApplicationWithStyle(new ConsoleLogger().debug())
  }

  /**
   *
   * @return {ApplicationWithStyle}
   */
  static withoutLogger() {
    return new ApplicationWithStyle(new FakeLogger().debug())
  }

  /**
   *
   * @return {HotBalloonTestApplication}
   */
  application() {
    return this.__application
  }

  /**
   *
   * @return {AppStylesConfig}
   */
  stylesConfig() {
    return this.__stylesConfig
  }

}
