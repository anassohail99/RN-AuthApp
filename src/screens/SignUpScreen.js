//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
// import {AuthContext} from ';

// create a component
const SignUpScreen = ({navigation}) => {
  // states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    //#region
    // <View style={styles.container}>
    //   <Text style={styles.text}> Create an accunt </Text>
    //   <FormInput
    //     labelValue={email}
    //     onChangeText={(userEmail) => setEmail(userEmail)}
    //     placeholderText="Email"
    //     iconType="user"
    //     keyboardType="email-address"
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //   />
    //   <FormInput
    //     placeholderText="Password"
    //     iconType="lock"
    //     labelValue={password}
    //     onChangeText={(userPass) => setPassword(userPass)}
    //     secureTextEntry={true}
    //   />
    //   <FormButton
    //     buttonTitle="Sign Up"
    //     onPress={() => alert('Sign Up Clicked!')}
    //   />

    //   <View style={styles.textPrivate}>
    //     <Text style={styles.color_textPrivate}>
    //       By registering, you confirm that you accept our
    //       <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
    //         <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
    //           Terms of service
    //         </Text>
    //       </TouchableOpacity> and
    //     </Text>
    //     <Text style={styles.color_textPrivate}>  </Text>
    //     <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
    //       Privacy Policy
    //     </Text>
    //   </View>

    //   <SocialButton
    //     title="Sign in with Facebook"
    //     btnType="facebook"
    //     color="#4867aa"
    //     backgroundColor="#e6eaf4"
    //     onPress={() => {}}
    //   />

    //   <SocialButton
    //     title="Sign in with Google"
    //     btnType="google"
    //     color="#de4d41"
    //     backgroundColor="#f5e7ea"
    //     onPress={() => {}}
    //   />

    //   <TouchableOpacity
    //     style={styles.forgotButton}
    //     onPress={() => navigation.navigate('Signup')}>
    //     <Text style={styles.navButtonText}>
    //       Don't have an account? Create one
    //     </Text>
    //   </TouchableOpacity>
    // </View>
    //#endregion

    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email, password)}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            title="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />

          <SocialButton
            title="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

//make this component available to the app
export default SignUpScreen;
