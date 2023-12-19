import React from 'react'
import { Dropdown, MenuItem ,Image} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <MenuItem>
         <Image  avatar spaced ="right" src="https://avatars.githubusercontent.com/u/77741685?s=400&u=71d02193482aaf7015558a7b45354b6f8575efff&v=4"/>
         <Dropdown pointing="top left" text='Asli'>
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut} text="Çikiş Yap" icon="sign-out"/> 
            </Dropdown.Menu>
         </Dropdown>
        </MenuItem>
    </div>
  )
}
