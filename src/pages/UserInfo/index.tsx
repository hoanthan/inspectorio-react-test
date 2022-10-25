import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useAppContext } from '../../contexts/AppProvider';
import { IUser } from '../../types/user';

const UserInfoPage: React.FC = () => {
    const { registerPageTitle, setEnableBackNavigation } = useAppContext()
    const { username } = useParams<{
        username: string
    }>()
    const [isLoading, setLoading] = useState(false)
    const [user, setUser] = useState<IUser | null>(null)

    const fetchUser = async () => {
        try {
            if (!username) return;
            setLoading(true)
            const { data } = await axios.get('https://api.github.com/users/' + username, {
                paramsSerializer: {
                    encode: (value) => value
                }
            })
            setUser(data)
        } catch (error) {
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setEnableBackNavigation(true)
        return () => {
            setEnableBackNavigation(false)
        }
    }, [setEnableBackNavigation])

    useEffect(() => {
        fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username])

    useEffect(() => {
        registerPageTitle("Person")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) return <Skeleton />

    if (!user) return null;

    return (
        <Stack direction="row" spacing={2}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Avatar src={user.avatar_url} />
            </Box>
            <Stack direction="column" sx={{
                borderBottom: '1px solid #ccc',
                flexGrow: 1
            }}>
                <Typography variant="h6">
                    {user.name}
                </Typography>
                <Typography color="gray">
                    {user.location}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default UserInfoPage