import {HotBalloonTestApplication} from './HotBalloonTestApplication'
import {TestAppDispatcher} from './TestAppDispatcher'


export const HotballoonTestDummy = new HotBalloonTestApplication(
  'HotBalloonTestApplicationDummy',
  new TestAppDispatcher()
)


