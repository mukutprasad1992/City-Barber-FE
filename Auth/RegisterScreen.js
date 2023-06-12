import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import backgroundImage from "../assets/barber-2.jpg";




const validationSchema = Yup.object().shape({
  email: Yup.string().required("Please enter valid email "),
  password: Yup.string().required("Please enter valid password "),
  firstname: Yup.string().required("Please enter firstname"),
  lastname: Yup.string().required("Please enter lastname"),
});

const RegisterScreen = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");

  const handleLogin = () => {
    // Perform Register logic here
    console.log("Logging in...");
    console.log("Firstname", firstname);
    console.log("Lastname", lastname);
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

    if (!firstname) {
      setFirstnameError("Please enter Firstname");
      return;
    }

    if (!lastname) {
      setLastnameError("Please enter Lastname");
      return;
    }



    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);

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
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              value={values.firstname}
            />
            {errors.firstname && (
              <Text style={styles.error}>{errors.firstname}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Lastname"
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
            />
            {errors.lastname && (
              <Text style={styles.error}>{errors.lastname}</Text>
            )}
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
