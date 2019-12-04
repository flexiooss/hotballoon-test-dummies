/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {FakeLogger} from '@flexio-oss/js-logger'

const assert = require('assert')

export class Test extends TestCase {
  setUp() {
    this.logger = new FakeLogger()
  }
}

runTest(Test)
