import { Box, Button, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import { AnimatedBackground } from "../../../components/AnimedBackground/AnimedBackgroud";
import { Padding } from "@mui/icons-material";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop:"100px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        },
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: "1px solid ${theme.palette.primary.contrastText}"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth={"lg"}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Júlia Alves</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>Front-End Developer</Typography>
                            <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <Button color="secondary">
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                                    <Button color="secondary">
                                        <MailIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero