import { ROUTER } from '../../../config'
import Profile from '../index'

const profileRouter = {
  path: ROUTER.profile,
  element: <Profile />,
}
export const ProfileRouters = [profileRouter]
