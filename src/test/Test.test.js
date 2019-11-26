/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {ApplicationRouter} from '../js/ApplicationRouter'
import {FakeLogger} from '@flexio-oss/js-logger'

const assert = require('assert')

export class Test extends TestCase {
  setUp() {
    this.logger = new FakeLogger()
  }

  testAppRouter() {
    new ApplicationRouter(this.logger)
  }
}

runTest(Test)
