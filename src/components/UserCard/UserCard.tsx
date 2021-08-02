import styled from "styled-components";
import React, { HTMLAttributes } from "react";
import { Box } from "../../components/Box/Box"
import { Text } from "../../components/Text/Text"

interface UserCardOptions {
    className?: string;
    name: string;
    mail: string;
}

type UserCardProps = HTMLAttributes<HTMLDivElement> & UserCardOptions;

const CustomBox = styled(Box)`
  display: flex;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
  width: 400px;
  border-radius: 5%;
  background-color: #CBAACB;
  @media (max-width: 400px) {
    width: 340px;
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
}) => {
    return (
        <CustomBox className={className}>
            <Box>
            </Box>
            <CustomInfoUserBox>
                <Text>{name}</Text>
                <Text>{mail}</Text>
            </CustomInfoUserBox>
        </CustomBox>
    )
}