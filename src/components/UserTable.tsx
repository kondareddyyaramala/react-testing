import { useEffect, useState } from "react";
import { FlattenedUser, User } from "../models/app.model";

export type UserProps = {
  url: string;
};

const UserTable = ({ url }: UserProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [flattenedUsers, setFlattenedUsers] = useState<FlattenedUser[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: User[] = await (await fetch(url)).json();
        setUsers(response);
      } catch (error) {
        console.log("Error : ", error);
        setUsers([]);
      }
    };
    fetchData();
  }, [url]);

  const copyProps = (incomingObject: any, copyToObject: any) => {
     Object.keys(incomingObject).forEach(key => {
        if(typeof incomingObject[key] === 'object'){
            copyProps(incomingObject[key], copyToObject);
        } else {
            copyToObject[key] = incomingObject[key];
        }
     })
  }

  useEffect(() => {
    const flattenUser = (user: User): FlattenedUser => {
       const  { first, last, title } = user.name;
       const flattenedUser =  { name: `${first} ${last} ${title}`};
       copyProps(user.location, flattenedUser);
       return flattenedUser as FlattenedUser;
    }

    setFlattenedUsers(users.map(flattenUser) as FlattenedUser[]);
  }, [users, copyProps]);

  
  return (
    <section>
        <header>User Information</header>
        <table>
            <thead>
                <tr></tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </section>
  );
};

export default UserTable;
