import axios from 'axios';
import { UserListResponse, Users } from '../interfaces';
import { useEffect, useState } from 'react';


const loadUsers = async (page: number = 1, setcurrentPage: (page: number) => void): Promise<Users[]> => {
  try {
   const { data } = await axios.get<UserListResponse>(
     "https://reqres.in/api/users", {
       params: {
         page
       }
     }
   );
   if (data.data.length === 0) {
     setcurrentPage(page - 1);
     return [];
   }
   return data.data;
  } catch (error) {
   console.log(error);
   return [];
  }
};

export const useUsers = () => {
  
  const [data, setData] = useState<Users[]>([]);
  const [currentPage, setcurrentPage] = useState(1)
  
  useEffect(() => {
    loadUsers(currentPage, setcurrentPage)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [currentPage, setData, setcurrentPage]);

  return {
    data,
    setData,
    currentPage,
    setcurrentPage
  }
 
}