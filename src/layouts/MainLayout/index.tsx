import { Aside } from '../../components/Aside'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Aside />
      <Outlet />
    </>
  )
}

export default MainLayout