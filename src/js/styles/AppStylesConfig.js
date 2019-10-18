export class AppStylesConfig {
  /**
   *
   * @param {Form} form
   * @param {Color} color
   * @param {Button} button
   */
  constructor(form, color, button) {
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

    /**
     *
     * @type {Button}
     * @private
     */
    this.__button = button
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

  /**
   *
   * @return {Button}
   */
  button() {
    return this.__button
  }
}
