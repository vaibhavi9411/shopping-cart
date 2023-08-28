import { FcStumbleupon } from 'react-icons/fc';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import PercentIcon from '@mui/icons-material/Percent';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

export const SidebarData = [
    {
        "title": "ProductsKart",
        "subtitle": "Thu 16 Jun",
        "icon": <FcStumbleupon />
    },
    {
        "title": "Menu",
        "subtitle": "Burger",
        "icon": <LunchDiningIcon />
        },
    {
        "title": "MENU DASHBOARD",
        "children": [
            {
                "title": "Dashboard",
                "icon": <SpaceDashboardIcon />,
                "link" : "./"
            },
            {
                "title": "Menus",
                "icon": <AssignmentIcon />,
                "link": "./",
                "tinyText": "NEW"
            },
            {
                "title": "History",
                "icon": <TimerOutlinedIcon />,
                "link": "./"
            },   
            {
                "title" : "Wallet",
                "icon": <WalletOutlinedIcon/>,
                "link": "./"
            },
            {
                "title": "Promotion",
                "icon": <PercentIcon />,
                "link": "./",
                "tinyText": "12+"
            }         
        ]
    },
    {
        "title": "GENERAL",
        "children": [
            {
                "title": "Settings",
                "icon": <SettingsOutlinedIcon />,
                "link": "./"
            },
            {
                "title": "Give Rating",
                "icon": <ReviewsOutlinedIcon />,
                "link": "./"
            }
        ]
    }
]