import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { CategoryItem } from "./categoryInterface";

export const listCategory: CategoryItem[] = [
  {
    text: "Woman’s Fashion",
    subMenu: "Women",
    more: <ExpandMore />,
    less: <ExpandLess />,
  },
  {
    text: "Men’s Fashion",
    subMenu: "Men",
    more: <ExpandMore />,
    less: <ExpandLess />,
  },
  {
    text: "Electronics",
  },
  {
    text: "Home & Lifestyle",
  },
  {
    text: "Medicine",
  },
  {
    text: "Sports & Outdoor",
  },
  {
    text: "Baby’s & Toys",
  },
  {
    text: "Groceries & Pets",
  },
  {
    text: "Health & Beauty",
  },
];
export const profileSidebarList = [
  {
    text: 'Manage My Account',
    subText: [
      {
        text: 'My Profile',
        path: '/home'
      },
      {
        text: 'Address Book',
        path: '/home'
      },
      {
        text: 'My Payment Options',
        path: '/home'
      }
    ]
  },
  {
    text: 'Manage Orders',
    subText: [
      {
        text: 'My Returns',
        path: '/home'
      },
      {
        text: 'My Cancellations',
        path: '/home'
      },
      
    ]
  },
  {
    text: 'My WhishList',
  }
]