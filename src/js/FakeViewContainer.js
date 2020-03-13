import {ViewContainer, ViewContainerParameters} from '@flexio-oss/hotballoon'
import {FakeNodeElement} from './FakeNodeElement'

export class FakeViewContainer extends ViewContainer {
  constructor(componentContext) {
    super(
      new ViewContainerParameters(
        componentContext,
        componentContext.nextID(),
        FakeNodeElement
      )
    )
  }
  renderAndMount() {
  }
}
