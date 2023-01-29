import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const LoginModal = ({  isOpen, onClose }: LoginModalProps) => {

  return <Modal
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader/>}>
      <LoginFormAsync onSuccess={onClose}/>
    </Suspense>
  </Modal>
}
