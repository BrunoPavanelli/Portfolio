import { useContext } from "react";

import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  ContactSection,
  ContactSectionContent,
  ContactSectionText,
  ContactsCards,
  ContactCard,
  ContactCardImage,
  ContactCardContent,
} from "./style";

import { FaWhatsapp, FaEnvelopeOpen, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import { userData } from "@/utils/userData";
import { LanguageContext } from "../../providers/LanguageProvider";

export const Contacts = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [-1, 1], [0, 1]);

  const { language } = useContext(LanguageContext)

  return (
    <ContactSection id="contact">
      <Container>
        <ContactSectionContent ref={ref}>
            <ContactSectionText>
              <Text as="span" type="heading2" color="brand1">
                {language.contactPresentation.first_piece}
              </Text>
              <Text type="heading2" color="grey4">
                {language.contactPresentation.second_piece}
                <Text as="span" type="heading2" color="brand1">
                  {language.contactPresentation.third_piece}
                </Text>
                  {language.contactPresentation.fourth_piece}
                <Text as="span" type="heading2" color="brand1">
                  {language.contactPresentation.fifth_piece}
                </Text>
              </Text>
            </ContactSectionText>
          <ContactsCards>
            <ContactCard>
              <ContactCardImage className="wpp">
                <FaWhatsapp color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language.whatsapp}
                </Text>
                <Text color="grey2" type="body2">
                  {language.whatsappMessage}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                >
                  {language.whatsappButton}
                </Text>
              </ContactCardContent>
            </ContactCard>

            <ContactCard>
              <ContactCardImage className="email">
                <FaEnvelopeOpen color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language.email}
                </Text>
                <Text color="grey2" type="body2">
                  {language.emailMessage}
                </Text>

                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={`mailto=${userData.emailUser}`}
                  onClick={() =>
                    (window.location.href = "mailto:brunopavanellicontato@gmail.com")
                  }
                >
                  {language.emailButton}
                </Text>
              </ContactCardContent>
            </ContactCard>
            <ContactCard>
              <ContactCardImage className="linkedin">
                <FaLinkedin color="#fff" size={24} />
              </ContactCardImage>
              <ContactCardContent>
                <Text type="heading4" color="grey4">
                  {language.linkedin}
                </Text>
                <Text color="grey2" type="body2">
                  {language.linkedinMessage}
                </Text>
                <Text
                  as="a"
                  color="grey2"
                  type="body2"
                  target="_blank"
                  href={linkedInUrl}
                >
                  {language.linkedinButton}
                </Text>
              </ContactCardContent>
            </ContactCard>
          </ContactsCards>
        </ContactSectionContent>
      </Container>
    </ContactSection>
  );
};
