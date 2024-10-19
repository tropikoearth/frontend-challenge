import Image from "next/image";
import * as S from "./style";
import Tropiko from "@/assets/tropiko.svg";

const Header = () => {
  return (
    <S.Container>
      <S.ContentLogo>
        <Image src={Tropiko} alt="Tropiko" />
      </S.ContentLogo>
    </S.Container>
  );
};

export default Header;
