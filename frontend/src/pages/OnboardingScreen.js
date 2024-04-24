import { Image, View, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



function OnboardingScreen({navigation}) {
    return (
        <Onboarding

        //To handle the navigation to the Homepage if Skip is clicked
        onSkip={() => navigation.replace("Test")}

        //To handle the navigation to the Homepage after Done is clicked
        onDone={() => navigation.replace("Test")}

        pages={[
        {
            backgroundColor: '#c2d7e3',
            image: <Image source={require('../../assets/doc4.png')} />,
            title: 'Consult doctors near you',
            subtitle: 'Book your appoitment with a doctor in few steps.',
        },
        {
            backgroundColor: '#e2e8ef',
            image: <Image source={require('../../assets/appointment3.png')} />,
            title: 'Quick and easy appointments',
            subtitle: 'Search for your nearest Hospital.',
        },
        {
            backgroundColor: '#ffffff',
            image: <Image source={require('../../assets/hospital2.png')} />,
            title: 'Find best hospitals near you',
            subtitle: 'Select your feasible time slot.',
        }
        ]}
        />
    );
}

export default OnboardingScreen;