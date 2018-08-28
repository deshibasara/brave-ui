/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

// Components
import Heading from '../../../../src/components/text/heading'
import Button from '../../../../src/components/buttonsIndicators/button'
import Input from '../../../../src/components/formControls/input'
import Modal from '../../../../src/components/popupModals/modal'

// Utils
import locale from '../page/fakeLocale'
import theme from '../page/theme'

interface NewToSyncModalProps {
  onClose: () => void
}

class NewToSyncModal extends React.PureComponent<NewToSyncModalProps, {}> {
  get fakeDeviceName () {
    return 'Your favorite coding OS'
  }

  setupSync = () => {
    console.log('fake: setting up sync')
  }

  render () {
    const { onClose } = this.props
    return (
      <Modal id='showIAmNewToSyncModal' onClose={onClose}>
        <Heading level={1}>{locale.iAmNewToSync}</Heading>
        <label>{locale.enterAnOptionalName}</label>
        <Input placeholder={this.fakeDeviceName} />
        <footer style={theme.modalButtonsContainer}>
          <Button
            level='primary'
            type='accent'
            size='medium'
            onClick={this.setupSync}
            text={locale.setUpSync}
          />
        </footer>
      </Modal>
    )
  }
}

export default NewToSyncModal
