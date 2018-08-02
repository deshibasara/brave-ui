/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'

import { StyledPanel, StyledPanelPopped } from './style'

export interface PanelTheme {
  display?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  maxWidth?: string
  minWidth?: string
  width?: string
  height?: string
  minHeight?: string
  margin?: string
  padding?: string
  backgroundColor?: string
  fontFamily?: string
  color?: string
}

export interface PanelProps {
  id?: string
  theme?: PanelTheme
  popped?: boolean
  children?: React.ReactNode
}

class Panel extends React.PureComponent<PanelProps, {}> {
  render () {
    const { id, theme, popped, children } = this.props
    return (
      popped
        ? <StyledPanel id={id} theme={theme}>{children}</StyledPanel>
        : <StyledPanelPopped id={id} theme={theme}>{children}</StyledPanelPopped>
    )
  }
}

export default Panel
