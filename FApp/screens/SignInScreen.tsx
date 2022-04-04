/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignButtons from '../components/SignButtons';
import SignForm from '../components/SignForm';

import {signIn, signUp} from '../lib/auth';

interface Props {
  navigation: any;
  route: any;
}
interface Form {
  email: string;
  password: string;
  confirmPassword?: string;
}
function SignInScreen({navigation, route}: Props) {
  const {isSignUp} = route.params ?? {};
  const [form, setForm] = React.useState<Form>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = React.useState(false);
  const createChangeTextHandler = (name: keyof Form) => (value: string) => {
    setForm({...form, [name]: value});
  };
  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password} = form;
    const info = {email, password};
    setLoading(true);
    try {
      const {user} = isSignUp ? await signUp(info) : await signIn(info);
      // console.log('user', user);
    } catch (e) {
      Alert.alert('실패');
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const passwordRef = React.useRef<any>();
  const confirmPasswordRef = React.useRef<any>();

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({ios: 'padding'})}>
      <SafeAreaView style={styles.fullScreen}>
        <Text style={styles.text}>Public Gallery</Text>
        <View style={styles.form}>
          <SignForm
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          <SignButtons
            isSignUp={isSignUp}
            onSubmit={onSubmit}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});
export default SignInScreen;
