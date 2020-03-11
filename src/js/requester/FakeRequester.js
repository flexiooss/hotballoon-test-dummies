import {setTestBlobToGlobal} from './Blob'


setTestBlobToGlobal()


class RequestSendBuilder {

  constructor() {

    /**
     * @type {?Object}
     * @private
     */
    this.__headers = null
    /**
     * @type {?string}
     * @private
     */
    this.__path = null
    /**
     * @type {?Object}
     * @private
     */
    this.__parameters = null
    /**
     * @type {?string}
     * @private
     */
    this.__body = null
    /**
     * @type {?string}
     * @private
     */
    this.__method = null
  }

  /**
   * @param value
   * @return {RequestSendBuilder}
   */
  headers(value) {
    this.__headers = value
    return this
  }

  /**
   * @param value
   * @return {RequestSendBuilder}
   */
  path(value) {
    this.__path = value
    return this
  }

  /**
   * @param value
   * @return {RequestSendBuilder}
   */
  parameters(value) {
    this.__parameters = value
    return this
  }

  /**
   * @param value
   * @return {RequestSendBuilder}
   */
  body(value) {
    this.__body = value
    return this
  }

  /**
   * @param value
   * @return {RequestSendBuilder}
   */
  method(value) {
    this.__method = value
    return this
  }

  /**
   * @return {RequestSend}
   */
  build() {
    return new RequestSend(
      this.__headers,
      this.__path,
      this.__parameters,
      this.__body,
      this.__method
    )
  }
}


class RequestSend {
  /**
   *
   * @return {Object}
   */
  headers() {
    return this.__headers
  }

  /**
   *
   * @return {string}
   */
  path() {
    return this.__path
  }

  /**
   *
   * @return {Object}
   */
  parameters() {
    return this.__parameters
  }

  /**
   *
   * @return {string}
   */
  body() {
    return this.__body
  }

  /**
   *
   * @return {string}
   */
  method() {
    return this.__method
  }

  /**
   *
   * @param {Object} headers
   * @param {string} path
   * @param {Object} parameters
   * @param {string} body
   * @param {string} method
   */
  constructor(headers, path, parameters, body, method) {

    /**
     * @type {Object}
     * @private
     */
    this.__headers = headers
    /**
     * @type {string}
     * @private
     */
    this.__path = path
    /**
     * @type {Object}
     * @private
     */
    this.__parameters = parameters
    /**
     * @type {string}
     * @private
     */
    this.__body = body
    /**
     * @type {string}
     * @private
     */
    this.__method = method
  }
}


class FakeHttpRequester {
  /**
   *
   * @param {?Object} [expectedResponseHeaders={}]
   * @param {?Number} [expectedResponseCode=200]
   * @param {?string} [expectedResponseBody={}]
   * @param {?Number} [wait=0]
   */
  constructor(expectedResponseHeaders, expectedResponseCode = 200, expectedResponseBody = '{}', wait = 0) {
    /**
     * @type {Object}
     * @private
     */
    this.__expectedResponseHeaders = expectedResponseHeaders
    /**
     * @type {Number}
     * @private
     */
    this.__expectedResponseCode = expectedResponseCode
    /**
     * @type {string}
     * @private
     */
    this.__expectedResponseBody = expectedResponseBody
    /**
     * @type {Number}
     * @private
     */
    this.__wait = wait

    this.__headers = {}
    this.__parameters = {}
    this.__path = null
    this.__lastMethod = null
    this.__requestSend = null
  }

  /**
   *
   * @return {?RequestSend}
   */
  requestSend() {
    return this.__requestSend
  }

  get(callback) {
    this.__requestSend = new RequestSendBuilder()
      .method('get')
      .body(null)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  delete(callback) {
    this.__requestSend = new RequestSendBuilder()
      .method('delete')
      .body(null)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  head(callback) {
    this.__requestSend = new RequestSendBuilder()
      .method('head')
      .body(null)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  post(callback, contentType = null, body = null) {
    this.__headers['Content-Type'] = contentType
    this.__requestSend = new RequestSendBuilder()
      .method('post')
      .body(body)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  put(callback, contentType = null, body = null) {
    this.__headers['Content-Type'] = contentType
    this.__requestSend = new RequestSendBuilder()
      .method('put')
      .body(body)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  patch(callback, contentType = null, body = null) {
    this.__headers['Content-Type'] = contentType
    this.__requestSend = new RequestSendBuilder()
      .method('patch')
      .body(null)
      .headers(this.__headers)
      .parameters(this.__parameters)
      .path(this.__path)
      .build()

    setTimeout(() => {
        callback(new FakeResponseDelegate(
          this.__expectedResponseCode,
          new Blob(this.__expectedResponseBody),
          this.__expectedResponseHeaders)
        )
      },
      this.__wait
    )
  }

  arrayParameter(name, values) {
    this.__parameters[name] = values
    return this
  }

  parameter(name, values) {
    this.__parameters[name] = values
    return this
  }

  arrayHeader(name, values) {
    this.__headers[name] = values
    return this
  }

  header(name, values) {
    this.__headers[name] = values
    return this
  }

  path(path) {
    this.__path = path
    return this
  }

}


export class FakeHttpRequesterBuilder {
  constructor() {
    this.__expectedResponseBody = '{}'
    this.__expectedResponseCode = 200
    this.__expectedResponseHeaders = {}
    this.__wait = 0
  }

  /**
   * @description JSON string
   * @param {string} body
   * @return {FakeHttpRequesterBuilder}
   */
  expectedResponseBody(body) {
    this.__expectedResponseBody = body
    return this
  }

  /**
   * @param {number} code
   * @return {FakeHttpRequesterBuilder}
   */
  expectedResponseCode(code) {
    this.__expectedResponseCode = code
    return this
  }

  /**
   * @param {string} key
   * @param {array} values
   * @return {FakeHttpRequesterBuilder}
   */
  expectedResponseHeaders(key, values) {
    this.__expectedResponseHeaders[key] = values
    return this
  }

  /**
   * @param {string} key
   * @param {string} value
   * @return {FakeHttpRequesterBuilder}
   */
  expectedResponseHeader(key, value) {
    this.__expectedResponseHeaders[key] = value
    return this
  }

  /**
   * @return {FakeHttpRequesterBuilder}
   */
  expectedResponseContentTypeJson() {
    this.__expectedResponseHeaders['Content-Type'] = 'application/json'
    return this
  }

  /**
   * @description wait ms
   * @param {number} ms
   * @return {FakeHttpRequesterBuilder}
   */
  wait(ms) {
    this.__wait = ms
    return this
  }

  /**
   *
   * @return {FakeHttpRequester}
   */
  build() {
    return new FakeHttpRequester(
      this.__expectedResponseHeaders,
      this.__expectedResponseCode,
      this.__expectedResponseBody,
      this.__wait
    )
  }
}


class FakeResponseDelegate {

  constructor(code, body, headers) {
    this.__body = body
    this.__headers = headers
    this.__code = code
  }

  header(name) {
    if (name in this.__headers) {
      return this.__headers[name]
    } else {
      return null
    }
  }

  code() {
    return this.__code
  }

  payload() {
    return this.__body
  }

}

