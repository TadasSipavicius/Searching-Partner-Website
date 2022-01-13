import React from 'react';

import useMobile from '../../useMobile';
import NavigationBarMobile from './NavigationBarMobile';
import NavigationBar from './NavigationBar';
export default function ResponsiveNavigationBar(){
    const isMobile = useMobile();

    return isMobile ? <NavigationBarMobile /> : <NavigationBar />
}