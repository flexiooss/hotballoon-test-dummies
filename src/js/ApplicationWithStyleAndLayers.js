import '@flexio-oss/stylist'
import '@flexio-oss/flex-types'
import {ApplicationBuilder} from '@flexio-oss/hotballoon'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {AppStyles} from './styles/AppStyles'
import {FakeLogger, ConsoleLogger} from '@flexio-oss/js-logger'
import {ComponentAtmosphereLayersBuilder} from '@flexio-oss/atmosphere-layers'

export class ApplicationWithStyleAndLayers {
  /**
   *
   * @param {LoggerInterface} logger
   * @param {Element} layersParentNode
   * @private
   */
  constructor(logger, layersParentNode) {
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
      .document(document)
      .build()

    /**
     *
     * @type {ThemeStyle}
     * @private
     */
    this.__styles = AppStyles.build(this.__logger)

    /**
     * @type {ComponentAtmosphereLayersPublicHandler}
     * @private
     */
    this.__layersComponent = ComponentAtmosphereLayersBuilder.build(
      this.__application,
      this.__styles.layers(),
      layersParentNode
    )
  }

  /**
   * @param {Element} layersParentNode
   * @return {ApplicationWithStyleAndLayers}
   */
  static withConsoleLogger(layersParentNode) {
    return new ApplicationWithStyleAndLayers(new ConsoleLogger().debug(), layersParentNode)
  }

  /**
   * @param {Element} layersParentNode
   * @return {ApplicationWithStyleAndLayers}
   */
  static withoutLogger(layersParentNode) {
    return new ApplicationWithStyleAndLayers(new FakeLogger().debug(), layersParentNode)
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

  /**
   *
   * @return {ComponentAtmosphereLayersPublicHandler}
   */
  layersComponent() {
    return this.__layersComponent
  }

}
