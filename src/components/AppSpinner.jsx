import React from "react";
import { Spinner, Box } from "@chakra-ui/react";
import { colors } from "styles";

const AppSpinner = () => {
    return (
        <Box
            sx={{
                flex: "1",
                alignitems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "40",
                zIndex: "1",
                opacity: "1",
            }}
        >
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translateY(-50%, -50%)"
            >
                <Spinner size={["xl"]} color={colors.PRIMARY} />
            </Box>
        </Box>
    );
};
export default AppSpinner;
