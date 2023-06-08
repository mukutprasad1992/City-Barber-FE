import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import backgroundImage from "../assets/bg-img.jpg"; 

const validationSchema = Yup.object().shape({
  email: Yup.string().required("  Please enter valid email "),
  password: Yup.string().required("  Please enter valid password "),
  Firstname : Yup.string().required(" Please enter firstname"),
  Lastname : Yup.string().required(" Please enter lastname"),

});

const RegisterScreen = () => {
  
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [FirstnameError,setFirstnameError] = useState("");
  const [LastnameError,setLastnameError] = useState ("");

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in...");
    console.log("Firstname",Firstname);
    console.log("lastname",Lastname);
    console.log("Email:", email);
    console.log("Password:", password);

    // Perform validation
    if (!email) {
      setEmailError("Please enter Email");
      return;
    }

    if (!password) {
      setPasswordError("Please enter password");
      return;
    }

if (!Firstname){
  setFirstnameError("Please enter Firstname");
  return;
}

if (!Lastname){
  setLastnameError("Please enter Lastname");
  return;
}



    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Firstname:",Firstname);
    console.log("Lastname:",Lastname);



    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Firstname"
              onChangeText={handleChange("Firstname")}
              onBlur={handleBlur("firstname")}
              value={values.Firstname}
            
            />
            {errors.Firstname && <Text style={styles.error}>{errors.Firstname}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Lastname"
              onChangeText={handleChange("Lastname")}
              onBlur={handleBlur("Lastname")}
              value={values.Lastname}
              
            />
          {errors.Lastname && <Text style={styles.error}>{errors.Lastname}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />

            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 10,
  },

  error: {
    marginBottom: 16,
    color: "#953553",
  },
});

export default RegisterScreen;
