import styled from "styled-components";
import React, { HTMLAttributes } from "react";
import { Box } from "../../components/Box/Box"
import { Text } from "../../components/Text/Text"

interface UserCardOptions {
    className?: string;
    name: string;
    mail: string;
    img?: any;
}

type UserCardProps = HTMLAttributes<HTMLDivElement> & UserCardOptions;

const CustomBox = styled(Box)`
  display: flex;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  width: 400px;
  border-radius: 5%;
  background-color: #fff;
  @media (max-width: 400px) {
    width: 340px;
  }
`;

const CustomImgBox = styled(Box)`
  flex-grow: 1;
`;

const CustomImg = styled.img`
  border-radius: 10%;
  margin: 10px;
  width: 128px;
  height: 128px;
  @media (max-width: 400px) {
    width: 60px;
    height: 60px;
  }
`;

const CustomInfoUserBox = styled(Box)`
  flex-grow: 9;
  margin-right: 10px;
`

export const UserCard: React.FC<UserCardProps> = ({
    className = "",
    name,
    mail,
    img,
}) => {
    return (
        <CustomBox className={className}>
          <CustomImgBox>
            <CustomImg src={img} alt="Cargando" />
          </CustomImgBox>
          <CustomInfoUserBox>
              <Text>{name}</Text>
              <Text>{mail}</Text>
          </CustomInfoUserBox>
        </CustomBox>
    )
}