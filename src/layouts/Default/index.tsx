import { Box } from '@mui/material'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'

const DefaultLayout: React.FC = () => {
    return (
        <Box data-testid="DefaultLayout__root" sx={{ flexGrow: 1 }}>
            <PageHeader />
            <Box sx={{
                flexGrow: 1,
                padding: 2
            }}>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </Box>
        </Box>
    )
}

export default DefaultLayout