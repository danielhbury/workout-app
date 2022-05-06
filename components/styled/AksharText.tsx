import React from 'react';
import { Text } from 'react-native';

export function AksharText(props: Text["props"]) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'akshar' },]} />
  )
}