import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from './redux/action'
import { useSelector } from 'react-redux'
const Index = () => {

  const value = useSelector((state) => state.numberReducer.couters)
  console.log(value)
  const dispatch = useDispatch()

  const incrementhandler=()=>{
    dispatch(increment())
  }
  return (
    <View style={{ marginTop: 200, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40, alignSelf: 'center' }}>{value}</Text>
      <View style={{ flexDirection: 'row', width: 100, justifyContent: 'space-between' }}>
        <Pressable onPress={incrementhandler}>
          <Text style={{ fontSize: 40 }}>+</Text>

        </Pressable>

        <Pressable onPress={() => dispatch(decrement())}>
          <Text style={{ fontSize: 40 }}>-</Text>

        </Pressable>
      </View>
    </View>
  )
}

export default Index