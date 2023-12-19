export const NavLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'Products',
        link: '#',
    },
    {
        id: 3,
        name: 'About us',
        link: '#',
    },
    {
        id: 4,
        name: 'Contact Us',
        link: '#',
    },
    {
        id: 5,
        name: 'Locations',
        link: '/locations',
       
    },
    {
        id: 6,
        name: 'Blog',
        link: '/blog',
    },
    {
        id: 7,
        name: 'Delivery Information',
        link: '/delivery-information',
    },
    {
        id: 8,
        name: 'Terms & Conditions',
        link: '/printing-terms-conditions',
    },
]


export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}
