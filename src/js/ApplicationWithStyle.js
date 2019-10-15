import {HotBalloonTestApplication} from './application/HotBalloonTestApplication'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {AppStyles} from './styles/AppStyles'
import {FakeLogger} from '@flexio-oss/js-logger'
import '@flexio-oss/stylist'

export class ApplicationWithStyle {
  constructor() {
    this.__logger = new FakeLogger().debug()

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
