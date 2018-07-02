/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled, { css } from 'styled-components'
import { Props } from './index';

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  flex-wrap: nowrap;
` as any

export const StyledImageWrapper = styled.div`
  flex-basis: 24px;
  position: relative;
  
  ${(p: Props) => p.verified
    ? css`
      flex-basis: 32px;
    `
    : ''
  }
  
` as any

export const StyledImage = styled.img`
  border-radius: 50%;
  
  ${(p: Props) => p.type === 'big'
    ? css`
      width: 48px;
      height: 48px;
    `
    : ''
  }
  
  ${(p: Props) => p.type !== 'big'
    ? css`
      width: 24px;
      height: 24px;
    `
    : ''
  }
` as any

export const StyledVerified = styled.img`
  position: absolute;
  bottom: 2px;
  right: 1px;
` as any

export const StyledContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
  margin-top: -5px;
  
  ${(p: Props) => p.type === 'big'
    ? css`
      padding-left: 11px;
    `
    : ''
  }
` as any

export const StyledTitleWrap = styled.div`
  ${(p: Props) => p.type !== 'big'
    ? css`
      margin-left: 10px;
    `
    : ''
  }
` as any

export const StyledTitle = styled.span`
  white-space: nowrap;
  
  ${(p: Props) => p.type === 'big'
    ? css`
      font-family: Poppins;
      font-size: 18px;
      font-weight: 500;
      line-height: 1.22;
      letter-spacing: -0.2px;
      color: #4c54d2;
    `
    : ''
  }
  
  ${(p: Props) => p.type !== 'big'
    ? css`
      font-family: Muli;
      font-size: 14px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      letter-spacing: -0.1px;
      color: #686978;
    `
    : ''
  }
  
` as any

export const StyledProvider = styled.span`
  white-space: nowrap;
  padding-left: 5px;
  
  ${(p: Props) => p.type === 'big'
    ? css`
      font-weight: 300;
      color: #4b4c5c;
      font-size: 18px;
    `
    : ''
  }
  
  ${(p: Props) => p.type !== 'big'
    ? css`
      color: #b8b9c4;
    `
    : ''
  }
` as any

export const StyledInlineImage = styled.img`
  display: inline-block;
  margin-right: 5px;
  vertical-align: text-bottom;
  height: 14px;
` as any

export const StyledProviderWrap = styled.div`
  font-family: Poppins;
  font-size: 13px;
  color: #838391;
  margin-top: 3px;
` as any

export const StyledInlineVerified = styled.img`
  vertical-align: bottom;
` as any