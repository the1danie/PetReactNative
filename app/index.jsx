import { StatusBar } from 'expo-status-bar';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import {images} from '../constants'
import CustomButton from "../components/CustomButton";

export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className='w-full items-center min-h-[85h] px-4'>
                    <Image
                        source={images.logo}
                        className={'w-[130px] h-[84px]'}
                        resizeMode={'contain'}
                    />
                    <Image
                        source={images.cards}
                        className={'max-w-[420px] w-full h-[300px]'}
                        resizeMode={'contain'}
                    />
                    <View className='relative'>
                        <Text className='text-2xl text-white font-bold text-center'>
                            Discover Endless Possibilities with{' '}
                            <Text className='text-secondary-200 text-3xl'>
                                Aora
                            </Text>
                        </Text>
                    </View>
                    <Image
                        source={images.path}
                        className={'w-[136px] h-[15px] ml-12 bottom-2'}
                        resizeMode={'contain'}
                    />
                    <View>
                        <Text className={'text-sm font-pregular text-gray-100 text-center w-full max-w-[350px]'}>
                            Where creativity meets innovation: embark on a journey of limitless exploration with aura
                        </Text>
                        <CustomButton
                            title={'Continue with Email'}
                            handlePress={() => router.push('/sign-in')}
                            containerStyle='mt-7'
                        />
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={'#161622'} style={'light'}/>
        </SafeAreaView>
    );
}

