import { StudentSidebar } from '../../components/StudentSidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <StudentSidebar />
      <Outlet />
    </>
  )
}

export default MainLayout