import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  subject?: string;
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
  subject,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Fayen Travel Agency</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Fayen Travel Agency,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  {subject}
                </Heading>

                <Text style={paragraph}>
                  <b>First Name: </b>
                  {firstName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Last Name: </b>
                  {lastName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Phonenumber: </b>
                  {phoneNumber}
                </Text>

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  userFirstName: "Alan",
  loginDate: new Date("September 7, 2022, 10:58 am"),
  loginDevice: "Chrome on Mac OS X",
  loginLocation: "Upland, California, United States",
  loginIp: "47.149.53.167",
} as ContactEmailProps;

export default ContactEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
