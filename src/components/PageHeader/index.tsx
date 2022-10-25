import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppProvider';
import { useCallback } from 'react';

const PageHeader: React.FC = () => {
    const { pageTitle, enableBackNavigation } = useAppContext()
    const navigate = useNavigate()

    const onBack = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return (
        <AppBar data-testid="PageHeader__root" position="static">
            <Toolbar>
                {enableBackNavigation && (
                    <IconButton 
                        sx={{
                            color: '#fff',
                            position: 'absolute',
                            left: 10
                        }}
                        onClick={onBack}
                        data-testid="PageHeader__backBtn"
                    >
                        <ArrowBackIosIcon color="inherit" />
                    </IconButton>
                )}
                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center'
                    }}
                    data-testid="PageHeader__title"
                >
                    {pageTitle}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default PageHeader