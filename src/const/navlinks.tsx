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
        link: '#',
        sub_menu: [
            {
                name: 'London',
                link: '#',
            },
            {
                name: 'Manchester',
                link: '#',
            },
            {
                name: 'Bristol',
                link: '#',
            },
            {
                name: 'Glasgow',
                link: '#',
            },
            {
                name: 'Liverpool',
                link: '#',
            },
            {
                name: 'Birmingham',
                link: '#',
            },
            {
                name: 'Edinburgh',
                link: '#',
            },
            {
                name: 'All Locations',
                link: '#',
            },
        ]
    },
    {
        id: 6,
        name: 'Blog',
        link: '#',
    },
    {
        id: 7,
        name: 'Delivery Information',
        link: '#',
    },
]


export type NavLinksType = {
    [x: string]: any;
    name: string,
    link: string
}
