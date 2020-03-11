import {globalScope} from '@flexio-oss/global-import-registry'

export class Blob {

  constructor(content, options) {
    this._content = content
    this._options = options
  }

  content() {
    return this._content
  }

  options() {
    return this._options
  }
}

export class FileReader {
  constructor() {
    this.result = null;
  }

  onloadend(){
    throw new Error('should be override')
  }

  readAsText(blob) {
    this.result = blob.content()
    this.onloadend()
  }
}

export const setTestBlobToGlobal = ()=>{
  global['Blob'] = Blob
  global['FileReader'] = FileReader
}
