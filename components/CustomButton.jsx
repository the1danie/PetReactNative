import {Text, View, TouchableOpacity} from 'react-native';

const CustomButton = ({title, handlePress, containerStyle, textStyle, isLoading}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary-200 rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}

        >
            <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
