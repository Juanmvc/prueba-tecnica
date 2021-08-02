import styled from "styled-components";
import { Box } from "../components/Box/Box"
import { Text } from "../components/Text/Text"
import DataTable from "react-data-table-component"
import { useEffect, useState } from "react";
import { getUsers, getRandomPuppy } from "../repositories/dataRepositories/dataRepository"
import { UserCard } from "../components/UserCard/UserCard"

const columns = [
    {
        name: "Id",
        selector: (row: { id: any; }) => `${ row.id }`,
        sortable: false,
    },
    {
        name: "Name",
        selector: (row: { name: string; }) => `${ row.name }`,
        sortable: true,
    },
    {
        name: "Username",
        selector: (row: { username: string; }) => `${ row.username }`,
        sortable: true,
    },
    {
        name: "Email",
        selector: (row: { email: string; }) => `${ row.email }`,
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
  margin-bottom: 30px;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

interface userData {
    img: any;
    id: number;
    name: string;
    username: string,
    email: string;
}

export const Users = () => {

    const [userData, setUserData] = useState<userData[]>([]);
    const [listProfileImages, setListProfileImages] = useState<string[]>([]);

    useEffect(() => {
        getUsers() 
            .then((res) => res.json())
            .then((data) => {
                setUserData(data);
            })
            .then(() => {
                
            })
            .catch((error) => console.log(error));
    },[])

    useEffect(() => {
        const userDataWithImg = userData;
        let listOfProfileImages: Array<string> = [];
        userDataWithImg.forEach(function (user, index) {
            getRandomPuppy()
                .then((res) => res.json())
                .then((data) => {
                    listOfProfileImages.push(data.message);
                    if(index+1 === userDataWithImg.length) {
                        setListProfileImages(listOfProfileImages)
                        }
                })           
        })

    }, [userData])

    return (
        <CustomBoxUsers>
            <Text fontSize="48px" weight="bold" textAlign="center">
                ¡Contacta con tus clientes!
            </Text>
            <CustomGridCards>
                {userData.map((userData, index) => (
                    <UserCard
                    key={index}
                    img={listProfileImages[index]}
                    className="userCard"
                    mail={userData.email}
                    name={userData.name}
                    />
                ))}
            </CustomGridCards>
            <Box margin="0 20px 0 20px" padding="0 0 50px 0">
                <Text fontSize="48px" weight="bold" textAlign="center">
                    ¡Contacta con tus clientes!
                </Text>
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