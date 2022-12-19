import { Badge, Box, Button, Card, CardBody, CardFooter, Center, Flex, Image, SimpleGrid, Spacer, Text, WrapItem } from '@chakra-ui/react';
import React from 'react';
import cig from '../assets/cig.png';
import xray from '../assets/xray.png';
import cock from '../assets/cock.png';
import Timer from './Timer';

const Cards = () => {
    return (
        <SimpleGrid justifyItems="center" columns={[1, 2, 3]} spacing={6} bg="#151A2E" p={4}>
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
                    <WrapItem justifyContent="center" p="4">
                        <Center>
                            <Image
                                src={cig}
                                alt='cig'
                                borderRadius='4px'
                            />
                        </Center>
                    </WrapItem>

                    <Flex align="center">
                        <Text fontSize='4xl'>#B8/4</Text>
                        <Spacer />
                        <Image mr={2} src="https://cdn.enochdev.com/marketplace-assets/assets/images/dill.svg" /> <Text fontSize='xl'>92</Text>
                    </Flex>
                    <Text mb="4" color="#6398DB">Enoch Citizen</Text>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box bg='#151A2E' height='80px'><Text color="#42CE1F">HIGHEST BID</Text><br />$260</Box>
                        <Box bg='#131E32' height='80px'>AUCTION ENDS IN <br /><Timer duration={2 * 24 * 60 * 60 * 1000}></Timer></Box>
                    </SimpleGrid>
                </CardBody>
                <CardFooter>
                    <Button w='full' variant='solid' colorScheme='blue'>
                        BID NOW
                    </Button>
                </CardFooter>
            </Card>
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
                    <WrapItem justifyContent="center" p="4">
                        <Center>
                            <Image
                                src={xray}
                                alt='cig'
                                borderRadius='4px'
                            />
                        </Center>
                    </WrapItem>

                    <Flex align="center">
                        <Text fontSize='4xl'>#B8/4</Text>
                        <Spacer />
                        <Image mr={2} src="https://cdn.enochdev.com/marketplace-assets/assets/images/redheart.svg" /> <Text fontSize='xl'>32</Text>
                    </Flex>
                    <Text mb="4" color="#6398DB">Enoch Citizen</Text>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box bg='#151A2E' height='80px'><Text color="#42CE1F">HIGHEST BID</Text><br />$260</Box>
                        <Box bg='#131E32' height='80px'>AUCTION ENDS IN <br /><Timer duration={2 * 24 * 60 * 60 * 1000}></Timer></Box>
                    </SimpleGrid>
                </CardBody>
                <CardFooter>
                    <Button w='full' variant='solid' colorScheme='blue'>
                        BID NOW
                    </Button>
                </CardFooter>
            </Card>
            <Card maxW='sm' bg='#112135' color='white'>
                <CardBody>
                    <Flex>
                        <Button variant='outline' colorScheme='teal' size='xs'>
                            Hot Deal
                        </Button>
                        <Spacer />
                        <Button variant='outline' colorScheme='#C8781A' size='xs'>
                            Sale
                        </Button>
                    </Flex>
                    <WrapItem justifyContent="center" p="4">
                        <Center>
                            <Image
                                src={cock}
                                alt='cig'
                                borderRadius='4px'
                            />
                        </Center>
                    </WrapItem>

                    <Flex align="center">
                        <Text fontSize='4xl'>#B8/4</Text>
                        <Spacer />
                        <Image mr={2} src="https://cdn.enochdev.com/marketplace-assets/assets/images/dill.svg" /> <Text fontSize='xl'>92</Text>
                    </Flex>
                    <Text mb="4" color="#6398DB">Enoch Citizen</Text>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Box bg='#151A2E' height='80px'><Badge variant='solid' colorScheme='green'>
                            15% OFF
                        </Badge><Text color="#D84343" textDecoration="line-through">$300</Text><br />$260</Box>
                        <Box bg='#131E32' height='80px'>FLASH DEAL ENDS IN <br /><Timer duration={2 * 24 * 60 * 60 * 1000}></Timer></Box>
                    </SimpleGrid>
                </CardBody>
                <CardFooter>
                    <Button w='full' variant="outline">ADD TO CART</Button>
                    <Button ml={3} w='full' variant='solid' colorScheme='blue'>
                        BID NOW
                    </Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
    );
};

export default Cards;