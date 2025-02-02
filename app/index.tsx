import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()

  return (
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', gap: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#F92500', padding: 15, borderRadius: 5 }} onPress={() => router.push('https://github.com/gr4yx01/hng-stage-0-mobile')}>
            <Text style={{ color: 'white' }}>Github Repository</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#00FF00', padding: 15, borderRadius: 5 }} onPress={() => router.push('https://hng.tech/hire/react-native-developers')}>
            <Text style={{ color: 'black' }}>HNG backlink</Text>
        </TouchableOpacity>
    </View>
  )
}

export default index