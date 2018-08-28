/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import Button from '../../../../src/components/buttonsIndicators/button'
import Modal from '../../../../src/components/popupModals/modal'

// Assets
import theme from '../page/theme'
import locale from '../page/fakeLocale'

interface ResetSyncModalProps {
  onClose: () => void
}

interface ResetSyncModalState {
  showAreYouSureAlert: boolean
}

class ResetSyncModal extends React.PureComponent<ResetSyncModalProps, ResetSyncModalState> {
  constructor (props: ResetSyncModalProps) {
    super(props)
    this.state = { showAreYouSureAlert: false }
  }

  areYouSureAlert = () => {
    if (window.confirm(locale.areYouSure)) {
      this.props.onClose()
      // fire sync reset
    }
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal id='showIAmResetSyncModal' onClose={onClose}>
        <Heading level={1}>{locale.resetSync}</Heading>
        <ul style={theme.modalList}>
          <li style={theme.modalListBullet}>{locale.resetSyncFirstBullet}</li>
          <li style={theme.modalListBullet}>{locale.resetSyncSecondBullet}</li>
          <li style={theme.modalListBullet}>{locale.resetSyncThirdBullet}</li>
        </ul>
        <footer style={theme.modalButtonsContainerGrid}>
          <div style={theme.modalButtonsContainerGridColumn}>
            <Button
              level='secondary'
              type='accent'
              size='medium'
              onClick={onClose}
              text={locale.cancel}
            />
          </div>
          <div style={theme.modalButtonsContainerGridColumn}>
            <Button
              level='primary'
              type='accent'
              size='medium'
              onClick={this.areYouSureAlert}
              text={locale.resetSync}
            />
          </div>
        </footer>
      </Modal>
    )
  }
}

export default ResetSyncModal
