import React, { useState } from "react"
import styles from "./EmailVerifyPageStyles"
import { View, SafeAreaView, Image, Text } from "react-native"
import EmailVerifyForm from "../../Components/EmailVerifyForm/EmailVerifyForm"
import EmailVerifyButton from "../../Components/EmailVerifyButton/EmailVerifyButton"
import { PageProp } from "../Common/PageProps"

function EmailVerifyPage({ navigation }: PageProp): React.JSX.Element {
  const [form, setForm] = useState({
    code: "",
  })
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/droplogo.png")}
          style={styles.headerImage}
          alt="Logo"
        />
        <Text style={styles.title}>
          Email verify
        </Text>
      </View>

      <View style={styles.form}>
        <EmailVerifyForm form={form} setForm={setForm} />
        <EmailVerifyButton
          code={form.code}
        />
      </View>
    </SafeAreaView>
  )
}

export default EmailVerifyPage;
