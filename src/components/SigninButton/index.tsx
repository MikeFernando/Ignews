import { signIn, signout, useSession } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SigninButton() {
   const [session] = useSession();

   console.log(session)

   return session ? (
      <button
         type='button'
         className={styles.signinButton}
         onClick={() => signout()}
      >
         <FaGithub color='#04d361' />
        Mike Fernando
         <FiX color='#737380' className={styles.closeIcon} />
      </button>
   ) : (
      <button
         type='button'
         className={styles.signinButton}
         onClick={() => signIn('github')}
      >
         <FaGithub color='#eba417' />
         Sig in with GitHub
      </button>
   )
}
