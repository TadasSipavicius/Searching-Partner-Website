import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

export default function useMobile() {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down('md'));
}
