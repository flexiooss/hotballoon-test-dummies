export class AppStylesConfig {
  /**
   *
   * @param {Form} form
   * @param {Color} color
   */
  constructor(form, color) {
    /**
     *
     * @type {Form}
     * @private
     */
    this.__form = form
    /**
     *
     * @type {Color}
     * @private
     */
    this.__color = color
  }

  /**
   *
   * @return {Form}
   */
  form() {
    return this.__form
  }

  /**
   *
   * @return {Color}
   */
  color() {
    return this.__color
  }
}
