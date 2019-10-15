import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {AppStylesConfig} from './AppStylesConfig'
import {styleSheetMediaAll, styleSheetMediaPrint} from '@flexio-oss/js-style-theme-interface'
import {Form, Color} from '@flexio-corp/theme-app-flexio'

export class AppStyles {
  /**
   *
   * @param {LoggerInterface} logger
   * @private
   */
  constructor(logger) {
    this.__styleHandler = new globalFlexioImport.io.flexio.stylist.Stylist(
      logger,
      new globalFlexioImport.io.flexio.stylist.types.StyleSheetMediaArrayBuilder()
        .pushValue(styleSheetMediaAll)
        .pushValue(styleSheetMediaPrint)
        .build(),
      false
    )
    this.__logger = logger
  }

  /**
   *
   * @param {LoggerInterface} logger
   * @return {AppStylesConfig}
   */
  static build(logger) {

    const appStyles = new AppStyles(logger)

    return new AppStylesConfig(
      appStyles.__styleHandler.register(new Form()),
      appStyles.__styleHandler.register(new Color())
    )
  }
}
