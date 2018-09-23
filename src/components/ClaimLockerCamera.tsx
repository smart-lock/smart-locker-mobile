import React from 'react'


import { RNCamera, BarCodeType } from 'react-native-camera';
import { Button } from 'react-native';

export interface IClaimLockerCameraProps {
  onLockerRead: (lockerId: string) => void
}

export interface IBarcodeReadEvent {
  data: string,
  type: keyof BarCodeType,
}

const fakeRead = ['cjmdtr3q3000s0a5842xwqcy1', 'cjmdtr3qd000u0a587jl0p7mu']

export class ClaimLockerCamera extends React.Component<IClaimLockerCameraProps> {
  private handleBarcodeRead = ({ data, type }: IBarcodeReadEvent) => {
    if (type === 'qr') {
      this.props.onLockerRead(data)
    }
  }
  render() {
    return (
      <RNCamera
        onBarCodeRead={this.handleBarcodeRead}
        style={{flex: 1}}>
          {fakeRead.map(fakeRead => (
            <Button
              key={fakeRead}
              title={fakeRead}
              onPress={() => {
                this.props.onLockerRead(fakeRead)
              }}
            />
          ))}
      </RNCamera>
    )
  }
}