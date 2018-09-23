import React from 'react'
import { ClaimMutation } from '../graphql/mutations';
import { ClaimLockerCamera } from '../components/ClaimLockerCamera';
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';

export const LoadingOverlay = () => (
  <View style={[
      StyleSheet.absoluteFill,
      {backgroundColor: 'rgba(0, 0, 0, 0.7)', alignItems: 'center', justifyContent: 'center'},
  ]}>
    <ActivityIndicator color="#FFF" />
  </View>
)

export interface ClaimLockerContainerProps {
  navigateToSessionDetail: (lockerSessionId: string) => void
}

export class ClaimLockerContainer extends React.Component<ClaimLockerContainerProps> {

  render() {
    return (
      <ClaimMutation
        renderLoading={LoadingOverlay}>
        {(claimLocker) => (
          <ClaimLockerCamera
            onLockerRead={(lockerId: string) => {
              claimLocker({
                variables: {
                  lockerId,
                }
              }).catch((err) => {
                Alert.alert(err.toString())
              })
              .then((response) => {
                if (response && response.data) {
                  this.props.navigateToSessionDetail(response.data.claimLocker.id)
                }
              })
            }}
          />
        )} 
      </ClaimMutation>
    )
  }
}