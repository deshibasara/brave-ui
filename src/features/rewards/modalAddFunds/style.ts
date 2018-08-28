/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import Card, { CardProps } from '../../../components/layout/card'
import { ComponentType } from 'react'

export const StyledWrapper = styled<{}, 'div'>('div')`
  font-family: Poppins, sans-serif;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 20px;
`

export const StyledNote = styled<{}, 'div'>('div') `
  max-width: 508px;
  font-family: Muli,sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`

export const StyledAddresses = styled<{}, 'div'>('div') `
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: stretch;
`

export const StyledAddress = styled<{}, 'div'>('div') `
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 0;
  width: 50%;
  box-sizing: border-box;
  padding: 0 15px 30px;
`

export const StyledLogo = styled<{}, 'img'>('img') `
  height: 60px;
  flex-basis: 60px;
  flex-shrink: 0;
  margin-right: 20px;
`

export const StyledCard = styled(Card as ComponentType<CardProps>)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-bottom: 10px;
  height: 100%;
`

export const StyledData = styled<{}, 'div'>('div') `
  flex-basis: 100%;
  text-align: center;
  margin-top: 30px;
  color: #686978;
`

export const StyledAddressTitle = styled<{}, 'div'>('div') `
  flex-basis: 30%;
  flex-grow: 1;
  font-size: 19px;
  line-height: 1.5;
`

export const StyledShowQR = styled<{}, 'button'>('button') `
  padding: 0;
  background: none;
  border: 0;
  width: 188px;
  height: 188px;
  color: #686978;
  font-weight: 500;
`

export const StyledQRImageWrapper = styled<{}, 'div'>('div') `
  flex-basis: 100%;
  text-align: center;
`

export const StyledQRImage = styled<{}, 'img'>('img') `
  width: 185px;
`

export const StyledLink = styled<{}, 'a'>('a') `
  color: #4c54d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const StyledHeader = styled<{}, 'div'>('div') `
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
