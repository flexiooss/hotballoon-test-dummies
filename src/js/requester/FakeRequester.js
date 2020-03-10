export class FakeHttpRequester {

  constructor(expectedResponseHeaders, expectedResponseCode, expectedResponseBody) {
    this.__expectedResponseHeaders = expectedResponseHeaders
    this.__expectedResponseCode = expectedResponseCode
    this.__expectedResponseBody = expectedResponseBody
    this.__headers = {}
    this.__parameters = {}
    this.__path = null
    this.__lastMethod = null
  }

  get(callback) {
    this.__lastMethod = 'get'
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
  }

  delete(callback) {
    this.__lastMethod = 'delete'
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
  }

  head(callback) {
    this.__lastMethod = 'head'
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
  }

  post(callback, contentType = null, body = null) {
    this.__lastMethod = 'post'
    this.__lastBody = body
    this.__lastContentType = contentType
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
  }

  put(callback, contentType, body) {
    this.__lastMethod = 'put'
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
  }

  patch(callback, contentType, body) {
    this.__lastMethod = 'patch'
    callback(new FakeResponseDelegate(this.__expectedResponseCode, this.__expectedResponseBody, this.__expectedResponseHeaders))
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
    this.__expectedResponseBody = null
    this.__expectedResponseCode = null
    this.__expectedResponseHeaders = {}
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
   *
   * @return {FakeHttpRequester}
   */
  build() {
    return new FakeHttpRequester(this.__expectedResponseHeaders, this.__expectedResponseCode, this.__expectedResponseBody)
  }
}


export class FakeResponseDelegate {

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

