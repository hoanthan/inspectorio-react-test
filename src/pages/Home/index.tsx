import { Button, Stack, Typography } from '@mui/material'
import React, { MouseEventHandler, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOP_FIVE } from '../../consts/users'
import { useAppContext } from '../../contexts/AppProvider'

const HomePage: React.FC = () => {
    const { registerPageTitle } = useAppContext()
    const navigate = useNavigate()

    useEffect(() => {
        registerPageTitle("Home")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSelectUser = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
        const target = e.target as HTMLButtonElement
        const username = target.getAttribute('data-username')
        if (!username) return;
        navigate(`/users/${username.toLowerCase()}`)
    }, [navigate])

    return (
        <Stack spacing={2}>
            <Typography variant="h4">
                Top 5 GitHub Users
            </Typography>
            <Typography>
                Type the username to see the information
            </Typography>
            <Stack direction="row" sx={{
                flexWrap: "wrap",
                gap: 2
            }}>
                {TOP_FIVE.map(username => (
                    <Button data-testid={`HomePage__username-${username}`} key={username} variant="contained" data-username={username} onClick={onSelectUser}>
                        {username}
                    </Button>
                ))}
            </Stack>
        </Stack>
    )
}

export default HomePage