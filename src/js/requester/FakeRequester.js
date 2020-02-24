export class FakeHttpRequester {

  constructor() {
    this.__responseHeaders = {}
    this.__responseHeaders["Content-Type"] = "Shit"
    this.__headers = {}
    this.__parameters = {}
    this.__nextCode = 200
    this.__nextBody = "{}"
    this.__path = null
    this.__lastMethod = null
  }

  get(callback) {
    this.__lastMethod = "get";
    callback(new FakeResponseDelegate(this.__nextCode, null, this.__responseHeaders))
  }

  delete() {
    this.__lastMethod = "delete";
    return new FakeResponseDelegate(this.__nextCode, null, this.__responseHeaders)
  }

  head() {
    this.__lastMethod = "head";
    return new FakeResponseDelegate(this.__nextCode, null, this.__responseHeaders)
  }

  post(callback, contentType = null, body = null) {
    this.__lastMethod = "post";
    this.__lastBody = body;
    this.__lastContentType = contentType;
    callback(new FakeResponseDelegate(this.__nextCode, this.__nextBody, this.__responseHeaders))
  }

  put(contentType, body) {
    this.__lastMethod = "put";
    return new FakeResponseDelegate(this.__nextCode, this.__nextBody, this.__responseHeaders)
  }

  patch(contentType, body) {
    this.__lastMethod = "patch";
    return new FakeResponseDelegate(this.__nextCode, this.__nextBody, this.__responseHeaders)
  }

  arrayParameter(name, values) {
    this.__parameters[name] = values
  }

  parameter(name, values) {
    this.__parameters[name] = values
  }

  arrayHeader(name, values) {
    this.__headers[name] = values
  }

  header(name, values) {
    this.__headers[name] = values
  }

  path(path) {
    this.__path = path
  }

  nextBody(body) {
    this.__nextBody = body
  }

  lastBody() {
    return this.__lastBody
  }
}

export class FakeResponseDelegate {

  constructor(code, body, headers) {
    this.__body = body
    this.__headers = headers
    this.__code = code
  }

  header(name) {
    if(name in this.__headers) {
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

