interface NavigationType{
    title: string;
    to: string;
}

const navigation: Array<NavigationType> = [
    {title: 'Home', to: '/'},
    {title: 'Find Players', to: '/findplayers'},
    {title: 'Find Tournaments', to: 'findtournaments'},
    {title: 'Blog', to: '/blog'}
]

export {navigation};
export type {NavigationType};