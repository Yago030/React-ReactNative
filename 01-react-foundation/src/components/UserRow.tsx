import { User } from "../interfaces";


interface Props{
    user: User;
}


export const UserRow = ({user}: Props) => {

    const {avatar, last_name, first_name, email} = user;

  return (
    <tr >
    <td><img style={{width:80, borderRadius:50}} src={avatar} alt= "Avatar"/></td>
    <td>{first_name} {last_name}</td>
    <td>{email}</td>
 </tr>
  )
}

