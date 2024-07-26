import {
    Box,
    HStack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import Spinner from "../components/Spinner";
import BusinessPresence from "./BusinessPresence";
const KycDetails = lazy(() => import('./KycDetails'))

const KycFormB = () => {
    const [kycData, setKycData] = useState({
        iecCode: '',
        iecCertificate: '',
        marketPlace: [],
        productCategories: [],
        addressProof: '',
        addressFile: '',
        idProof: '',
        idFile: '',
        adCode: '',
        adCodeFile: '',
        lutDate: '',
        lutFile: '',
        bankNumber: '',
        bankType: '',
        accType: '',
        ifsc: ''
    });
    const [selectedMarketplaces, setSelectedMarketplaces] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [stage, setStage] = useState(1);
    const [touched, setTouched] = useState({});
    const { colorMode } = useColorMode();
    const nextStage = () => setStage((prev) => prev + 1);
    const prevStage = () => setStage((prev) => prev - 1);
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });
    };
    const handleSubmit = () => {
        kycData.marketPlace = selectedMarketplaces;
        kycData.productCategories = selectedCategories;
        console.log(kycData)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setKycData({
            ...kycData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setKycData({
            ...kycData,
            [name]: files[0]
        });
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const handleSelectChange = (e, name) => {
        setKycData({
            ...kycData,
            [name]: e.target.value
        });
        setTouched({
            ...touched,
            [name]: true
        });
    };

    const getBorderColor = (name) => {
        if (!touched[name]) {
            return 'gray.600';
        }
        return isValid(name) ? 'green' : 'red';
    };

    const isValid = (name) => {
        return kycData[name] !== '';
    };

    return (
        <Suspense fallback={<Spinner />}>
            <Box w={['100%', '100%', '90%', '70%']} margin="0 auto" padding="6" borderWidth="1px" borderRadius="lg" boxShadow="lg" mt={5}>
                <HStack spacing="8" justify="center" marginBottom="6">
                    <Text
                        fontWeight="bold"
                        color={stage === 1 ? ' blue.400' : 'gray.500'}
                        fontSize={['sm', 'md']}
                        onClick={() => setStage(1)}
                        cursor={'pointer'}
                        bgColor={(stage === 1 && colorMode === 'dark') ? 'gray.700' : ((stage === 1 && colorMode === 'light') ? 'gray.100' : '')}
                        borderRadius={stage === 1 && 10}
                        padding={stage === 1 && 2}>
                        KYC Details
                    </Text>
                    <Text
                        fontWeight="bold"
                        color={stage === 2 ? 'blue.400' : 'gray.500'}
                        fontSize={['sm', 'md']}
                        onClick={() => setStage(2)}
                        cursor={'pointer'}
                        bgColor={(stage === 2 && colorMode === 'dark') ? 'gray.700' : ((stage === 2 && colorMode === 'light') ? 'gray.100' : '')}
                        borderRadius={stage === 2 && 10}
                        padding={stage === 2 && 2}>
                        Business Presence
                    </Text>
                </HStack>

                {stage === 1 && (
                    <KycDetails
                        kycData={kycData}
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                        handleSelectChange={handleSelectChange}
                        handleBlur={handleBlur}
                        nextStage={nextStage}
                        getBorderColor={getBorderColor}
                    />
                )}
                {stage === 2 && (
                    <BusinessPresence
                        selectedMarketplaces={selectedMarketplaces}
                        setSelectedMarketplaces= {setSelectedMarketplaces}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        kycData={kycData}
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                        handleSelectChange={handleSelectChange}
                        handleBlur={handleBlur}
                        prevStage={prevStage}
                        handleSubmit = {handleSubmit}
                        getBorderColor={getBorderColor}
                    />
                )}
                
            </Box>
        </Suspense>
    );
};

export default KycFormB;
