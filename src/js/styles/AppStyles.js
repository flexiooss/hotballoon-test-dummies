import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {styleSheetMediaAll, styleSheetMediaPrint} from '@flexio-oss/js-style-theme-interface'
import {themeAppFlexio} from '@flexio-corp/theme-app-flexio'

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
   * @return {Theme}
   */
  static build(logger) {


    const appStyles = new AppStyles(logger)

    themeAppFlexio.register(appStyles.__styleHandler)

    return themeAppFlexio
  }
}
