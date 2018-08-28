/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import {
  StyledWrapper,
  StyledTitle,
  StyledNote,
  StyledAddresses,
  StyledAddress,
  StyledLogo,
  StyledData,
  StyledShowQR,
  StyledQRImageWrapper,
  StyledQRImage,
  StyledCard,
  StyledAddressTitle,
  StyledLink,
  StyledHeader
} from './style'
import Modal from '../../../components/popupModals/modal/index'
import { getLocale } from '../../../helpers'

export type Type = 'BAT' | 'ETH' | 'BTC' | 'LTC'

export interface Address {
  address: string
  qr: string | null
  type: Type
}

export interface Props {
  onClose: () => void
  id?: string
  addresses: Address[]
}

interface State {
  current?: Type
}

export default class ModalAddFunds extends React.PureComponent<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      current: undefined
    }
  }

  onQR = (type: Type) => {
    this.setState({
      current: type
    })
  }

  getAddress = (address: Address) => {
    const logo = require(`./assets/${address.type}.svg`)

    const current = address.type === this.state.current

    return (
      <StyledAddress key={`address-${address.type}`}>
        <StyledCard>
          <StyledHeader>
            <StyledLogo src={logo} />
            <StyledAddressTitle>
              {getLocale(`title${address.type}`)}
            </StyledAddressTitle>
            <StyledData>
              {address.address}
            </StyledData>
          </StyledHeader>
          {
            address.qr
            ? (<>
              <StyledQRImageWrapper>
                {
                  current
                  ? <StyledQRImage src={address.qr} />
                  : <StyledShowQR onClick={this.onQR.bind(this, address.type)}>{getLocale('addFundsQR')}</StyledShowQR>
                }

              </StyledQRImageWrapper>
            </>)
            : null
          }
        </StyledCard>
      </StyledAddress>
    )
  }

  render () {
    const { id, onClose, addresses } = this.props

    return (
      <Modal id={id} onClose={onClose}>
        <StyledWrapper>
          <StyledTitle>{getLocale('addFundsTitle')}</StyledTitle>
          <StyledAddresses>
            {
              addresses && addresses.map((address: Address) => this.getAddress(address))
            }
          </StyledAddresses>
          <StyledNote>
            {getLocale('addFundsNote')} <StyledLink href='https://brave.com/faq-payments/#brave-payments'>
              {getLocale('addFundsFAQ')}
              </StyledLink>.
          </StyledNote>
        </StyledWrapper>
      </Modal>
    )
  }
}
