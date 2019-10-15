import {HotBalloonTestApplication} from './application/HotBalloonTestApplication'
import {TestAppDispatcher} from './dispatcher/TestAppDispatcher'
import {FakeLogger} from '@flexio-oss/js-logger'
import '@flexio-oss/stylist'

export class HotballoonTestDummy {
  /**
   *
   * @return {HotBalloonTestApplication}
   */
  static application() {
    const logger = new FakeLogger().debug()
    return new HotBalloonTestApplication(
      'Hotballoon-Test-Dummy',
      new TestAppDispatcher(logger),
      logger
    )
  }
}
