import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {FakeLogger} from '@flexio-oss/js-logger'
import '@flexio-oss/stylist'
import {ApplicationBuilder} from '@flexio-oss/hotballoon'

export class HotballoonTestDummy {
  /**
   *
   * @return {HotBalloonApplication}
   */
  static application() {
    const logger = new FakeLogger().debug()

    return new ApplicationBuilder()
      .id('Hotballoon-Test-Dummy')
      .dispatcher(new TestAppDispatcher(logger))
      .logger(logger)
      .build()
  }
}
