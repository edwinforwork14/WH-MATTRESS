import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Img,
} from "@react-email/components";

const brandTealLight = "#4ac0b0";
const brandTealPale = "#73e8d5";
const brandDarker = "#091d24";

export const WHContactEmail = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => (
  <Html>
    <Head />
    <Preview>
      {name} te ha escrito — {message.slice(0, 80)}
      {message.length > 80 ? "..." : ""}
    </Preview>
    <Body
      style={{
        fontFamily:
          "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: brandDarker,
        margin: "0",
        padding: "0",
        width: "100%",
      }}
    >
      <Container
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        {/* WH Brand Logo */}
        <Section style={{ textAlign: "center", marginBottom: "24px" }}>
          <Img
            src="https://whmattress.com/icon.png"
            alt="WH Mattress"
            width="180"
            height="104"
            style={{
              display: "inline-block",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Section>

        {/* Glass-effect card */}
        <Section
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 20px 60px -12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
            padding: "32px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glass shine overlay */}
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              height: "50%",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
              borderRadius: "24px 24px 0 0",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "150px",
              height: "100%",
              background:
                "radial-gradient(ellipse at left center, rgba(115,232,213,0.08), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "150px",
              height: "100%",
              background:
                "radial-gradient(ellipse at right center, rgba(115,232,213,0.08), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Title */}
            <Heading
              style={{
                color: brandTealPale,
                fontSize: "22px",
                fontWeight: "600",
                margin: "0 0 4px 0",
                textAlign: "center",
              }}
            >
              Nuevo mensaje
            </Heading>
            <Text
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                textAlign: "center",
                margin: "0 0 24px 0",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              Recibido desde whmattress.com
            </Text>

            <Hr
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                margin: "0 0 24px 0",
              }}
            />

            {/* Sender data */}
            <Section style={{ marginBottom: "20px" }}>
              <Row style={{ marginBottom: "12px" }}>
                <Column style={{ width: "100px", verticalAlign: "top" }}>
                  <Text
                    style={{
                      color: brandTealLight,
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      margin: "0",
                    }}
                  >
                    Nombre
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "15px",
                      margin: "0",
                    }}
                  >
                    {name}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: "12px" }}>
                <Column style={{ width: "100px", verticalAlign: "top" }}>
                  <Text
                    style={{
                      color: brandTealLight,
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      margin: "0",
                    }}
                  >
                    Email
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      color: brandTealPale,
                      fontSize: "15px",
                      margin: "0",
                    }}
                  >
                    {email}
                  </Text>
                </Column>
              </Row>

              <Row style={{ marginBottom: "12px" }}>
                <Column style={{ width: "100px", verticalAlign: "top" }}>
                  <Text
                    style={{
                      color: brandTealLight,
                      fontSize: "12px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      letterSpacing: "1.5px",
                      margin: "0",
                    }}
                  >
                    Motivo
                  </Text>
                </Column>
                <Column>
                  <Text
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "15px",
                      margin: "0",
                      textTransform: "capitalize",
                    }}
                  >
                    {subject === "servicio-al-cliente"
                      ? "Servicio al Cliente"
                      : subject === "quejas"
                      ? "Quejas"
                      : subject === "reclamos"
                      ? "Reclamos"
                      : subject === "sugerencias"
                      ? "Sugerencias"
                      : subject === "otros"
                      ? "Otros"
                      : subject}
                  </Text>
                </Column>
              </Row>
            </Section>

            <Hr
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                margin: "0 0 20px 0",
              }}
            />

            {/* Message */}
            <Text
              style={{
                color: brandTealLight,
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                margin: "0 0 10px 0",
              }}
            >
              Mensaje
            </Text>
            <Text
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "14px",
                lineHeight: "1.7",
                margin: "0",
                backgroundColor: "rgba(0,0,0,0.2)",
                padding: "16px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {message}
            </Text>
          </div>
        </Section>

        {/* Footer */}
        <Section style={{ textAlign: "center", marginTop: "24px" }}>
          <Text
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "11px",
              margin: "0 0 4px 0",
            }}
          >
            WH Mattress — El descanso que tu cuerpo va a notar
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.15)",
              fontSize: "10px",
              margin: "0",
            }}
          >
            Este mensaje fue enviado desde el formulario de contacto en
            whmattress.com
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);