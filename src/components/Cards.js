import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, SimpleGrid, Spacer, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import cig from '../assets/cig.png';

const Cards = () => {
    // cardsData = [
    //     {
    //         title: "#B8/457843",
    //         name: "Enoch Citizen",
    //         rating: "92",
    //         price:"260"
    //     },
    //     {
    //         title: "#B8/457843",
    //         name: "Enoch Citizen",
    //         rating: "32",
    //         price:"260"
    //     },
    // ]
    return (
        <Card maxW='sm' bg='#112135' color='white'>
            <CardBody>
                <Flex>
                    <Button variant='outline' colorScheme='teal' size='xs'>
                        Hot Deal
                    </Button>
                    <Spacer />
                    <Button variant='outline' colorScheme='#C8781A' size='xs'>
                        AUCTION
                    </Button>
                </Flex>
                <Image
                    src={cig}
                    alt='cig'
                    borderRadius='4px'
                />
                <SimpleGrid minChildWidth='120px' spacing='40px'>
                    <Box bg='#151A2E' height='80px'>HIGHEST BID<br />$10</Box>
                    <Box bg='#131E32' height='80px'>AUCTION ENDS IN</Box>
                </SimpleGrid>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button w='full' variant='solid' colorScheme='blue'>
                    BID NOW
                </Button>
            </CardFooter>
        </Card>
    );
};

export default Cards;