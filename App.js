import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email("well that's not an email'"),
    password: Yup.string().required().min(2, 'pretty sure this will be hacked'),
  });
  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={value => console.log('Login Values', value)}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Please enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Please enter your password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  label: {
    color: 'grey',
    fontSize: 14,
    margin: 10,
  },
  button: {
    backgroundColor: 'brown',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginLeft: 10,
  },
});
