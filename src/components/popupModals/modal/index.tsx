/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { StyledWrapper, StyledDialog, StyledClose, StyledContent } from './style'
import { CloseStrokeIcon } from '../../icons'

export interface Props {
  id?: string
  outsideClose?: boolean
  children?: React.ReactNode
  onClose?: () => void
  size?: 'small' | 'normal'
}

export default class Modal extends React.PureComponent<Props, {}> {
  static defaultProps = {
    size: 'normal',
    id: 'modal'
  }

  outsideClose = (e: any) => {
    e.stopPropagation()
    if (!this.props.outsideClose) {
      return
    }

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render () {
    const { id, onClose, children, size } = this.props

    return (
      <StyledWrapper id={id} onClick={this.outsideClose}>
        <StyledDialog size={size}>
          <StyledClose onClick={onClose}>
            <CloseStrokeIcon />
          </StyledClose>
          <StyledContent>
            {children}
          </StyledContent>
        </StyledDialog>
      </StyledWrapper>
    )
  }
}
