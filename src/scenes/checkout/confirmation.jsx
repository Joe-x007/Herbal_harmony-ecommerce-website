import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Confirmation = () => {
    return (
        <Box display="flex" flexDirection="column" minHeight="85vh">
            <Box m="90px auto" width="80%"  flexGrow={1}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    You have successfully made an Order —{" "}
                    Order confirmation will be sent via email.
                    <strong>Congrats on Making your Purchase</strong>
                </Alert>
            </Box>
        </Box>
    );
};

export default Confirmation;