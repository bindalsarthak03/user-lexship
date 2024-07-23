import {
    Box,
    Button,
    Flex,
    Heading,
    Spacer,
    useColorMode,
    VStack,
} from "@chakra-ui/react";
import { MultiSelect } from "react-multi-select-component";
import './BusinessPresence.css'
const BusinessPresence = ({ prevStage, handleSubmit, selectedMarketplaces, selectedCategories, setSelectedCategories, setSelectedMarketplaces }) => {

    const marketplaceOptions = [
        { label: 'Amazon', value: 'amazon' },
        { label: 'Aliexpress', value: 'aliExpress' },
        { label: 'Ebay', value: 'ebay' },
    ];

    const categoryOptions = [
        { label: 'Apparel', value: 'apparel' },
        { label: 'Beauty Products', value: 'beauty' },
        { label: 'Herbal Products', value: 'herbal' },
        { label: 'Handicraft', value: 'handicraft' },
        { label: 'Imitation Jewellery', value: 'jewellery' },
        { label: 'Home Furnishing', value: 'home' },
        { label: 'Toys', value: 'toys' },
        { label: 'Fashion Accessories', value: 'fashion' },
        { label: 'Footwear', value: 'footwear' },
        { label: 'Books', value: 'books' },
        { label: 'Electronics (without battery)', value: 'electronics_no_battery' },
        { label: 'Auto Parts', value: 'auto_parts' },
        { label: 'Electronic (with battery)', value: 'electronics_with_battery' },
        { label: 'Health Supplements', value: 'health' },
        { label: 'Collectable Items', value: 'collectable' },
        { label: 'Medical Equipment', value: 'medical' },
        { label: 'Loose Stones / Crystals', value: 'stones' },
        { label: 'Tools', value: 'tools' },
    ];

    const { colorMode } = useColorMode();
    const name = colorMode == 'dark' ? 'dark' : ''

    const handleNewField = (value) => ({
        label: value,
        value: value,
    });

    return (
        <VStack spacing="4" >
            <Heading as="h4" size={['md', 'lg']} mb={10}>Business Presence</Heading>
            <Heading as='h4' size={['sm', 'md']}>MarketPlace</Heading>
            <Box minWidth='70%' color={'black'} maxWidth="100%">
                <MultiSelect
                    className={name}
                    options={marketplaceOptions}
                    value={selectedMarketplaces}
                    onChange={setSelectedMarketplaces}
                    labelledBy={"Select"}
                    isCreatable={true}
                    onCreateOption={handleNewField}
                    overrideStrings={{ selectSomeItems: "Select Marketplaces" }}
                />
            </Box>
            <Heading as='h4' size={['sm', 'md']}>Product Categories</Heading>
            <Box minWidth="70%" maxWidth="100%" color={'black'}>
                <MultiSelect
                    className={name}
                    options={categoryOptions}
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                    labelledBy={"Select"}
                    isCreatable={true}
                    onCreateOption={handleNewField}
                    overrideStrings={{ selectSomeItems: "Select Categories" }}
                />
            </Box>

            <Flex width="100%" mt={4}>
                <Button colorScheme="gray" onClick={prevStage} size={['sm', 'md']}>Back</Button>
                <Spacer />
                <Button colorScheme="teal" onClick={handleSubmit} size={['sm', 'md']}>Submit</Button>
            </Flex>
        </VStack>
    );
};

export default BusinessPresence;
