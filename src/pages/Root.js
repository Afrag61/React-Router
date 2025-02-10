import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';
import cssClasses from './Root.module.css'

const RootLayout = () => {
  return <>
    <MainNavigation />
    <main className={cssClasses.content}>
    <Outlet />
    </main>
  </>;
};

export default RootLayout;
