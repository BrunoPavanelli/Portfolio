import { useState, useContext } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Flag } from "semantic-ui-react";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

import { LanguageContext } from "../../providers/LanguageProvider";
import { ptBr } from "@/utils/languageData";


export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);
  const { changeLanguage, language } = useContext(LanguageContext)

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
              <div onClick={changeLanguage} className="$svg">
                {language === ptBr 
                  ? <Flag name="br" />
                  : <Flag name="us" />
                }
              </div>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  const { language } = useContext(LanguageContext)
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        {language.projects}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        {language.contact}
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        {language.socialMedia}
      </Button>
    </NavbarLinks>
  );
};
