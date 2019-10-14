import {HotBalloonTestApplication} from './HotBalloonTestApplication'
import {TestAppDispatcher} from './TestAppDispatcher'
import {FakeLogger} from '@flexio-oss/js-logger'

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
