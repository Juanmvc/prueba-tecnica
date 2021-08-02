import styled from "styled-components";
import { Box } from "../components/Box/Box"
import { Text } from "../components/Text/Text"
import DataTable from "react-data-table-component"
import { useEffect, useState } from "react";
import { getUsers } from "../repositories/dataRepositories/dataRepository"
import { UserCard } from "../components/UserCard/UserCard"

const columns = [
    {
        name: "Id",
        selector: "id",
        sortable: true,
    },
    {
        name: "Name",
        selector: "name",
        sortable: true,
    },
    {
        name: "Username",
        selector: "username",
        sortable: true,
    },
    {
        name: "Email",
        selector: "email",
        sortable: true,
    }
]

const CustomBoxUsers = styled(Box)`
  background-color: rgba(247, 240, 222, 255);
  padding-top: 50px;
  @media (max-width: 400px) {
    padding-top: 10px;
  }
`;

const CustomGridCards = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 20px;
  max-width: 1500px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

interface userData {
    id: any;
    name: string;
    username: string,
    email: string;
}

export const Users = () => {

    const [userData, setUserData] = useState<userData[]>([])

    useEffect(() => {
        getUsers() 
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => console.log(error));
    })
    return (
        <CustomBoxUsers>
            <Text fontSize="48px" weight="bold" textAlign="center">
                ¡Contacta con tus clientes!
            </Text>
            <CustomGridCards>
                {userData.map((userData, index) => (
                    <UserCard
                    key={index}
                    className="userCard"
                    mail={userData.email}
                    name={userData.name}
                    />
                ))}
            </CustomGridCards>
            <Box>
                <DataTable
                    columns={columns}
                    data={userData}
                    noHeader
                    defaultSortFieldId="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    paginationPerPage={3}
                />
            </Box>
        </CustomBoxUsers>
    )
}