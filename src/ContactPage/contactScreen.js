//import liraries
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import axios from 'axios';

const Contact = () => {
  // BaseUrl();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  // emails
  const to = 'info@redpositive.in';
  const from = 'mehtabwarsi3@gmail.com';

  // Handling email address
  const options = {
    method: 'POST',
    url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ea1e4a71e4msh4e6f66ae7be1cbfp1d843bjsn815ee1594767',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    },
    data: `{"personalizations":[{"to":[{"email":"${to}"}],"subject":"hello react native"}],"from":{"email":"${from}"},"content":[{"type":"text/plain","value":"${[
      name,
      email,
      number,
      message,
    ]}}"}]}`,
  };

  const sendEmail = async () => {
    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log('message sent');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textStyle}>
        <Text variant="displaySmall" style={styles.txt}>
          Contact Us
        </Text>
      </View>
      <View style={styles.ContactPage}>
        <TextInput
          mode="outlined"
          label="Name"
          textContentType="name"
          onChangeText={text => setName(text)}
        />
        <TextInput
          mode="outlined"
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          mode="outlined"
          label="Mobile No"
          textContentType="telephoneNumber"
          keyboardType="numeric"
          onChangeText={text => setNumber(text)}
        />
        <TextInput
          mode="outlined"
          label="Message"
          multiline={true}
          numberOfLines={4}
          onChangeText={text => setMessage(text)}
        />
        <Button mode="contained" style={{marginTop: '10%'}} onPress={sendEmail}>
          Submit
        </Button>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ContactPage: {
    marginHorizontal: '10%',
    marginTop: '15%',
  },
  textStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
  },
  txt: {
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Contact;
