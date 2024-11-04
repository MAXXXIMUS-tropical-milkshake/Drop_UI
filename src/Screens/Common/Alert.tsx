import { Alert, AlertButton, AlertOptions, Platform } from 'react-native';


function alertPolyfill(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: AlertOptions) {
    const result = window.confirm([title, message].filter(Boolean).join('\n'))
    
    // if (result) {
    //     const confirm = options?.
    //     // const confirmOption = options?.style? == find(({ style }) => style !== 'cancel')
    //     // confirmOption && confirmOption.onPress()
    // } else {
    //     const cancelOption = options.find(({ style }) => style === 'cancel')
    //     cancelOption && cancelOption.onPress()

}

const alert = Platform.OS === 'web' ? alertPolyfill : Alert.alert
export default alert;