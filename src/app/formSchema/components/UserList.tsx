"use client";
import { FormEvent, useContext } from 'react';
import Swal from "sweetalert2";

import FormContext from '@/app/providers/FormContext';

export const UserList = () => {

const {setUserform, userform} = useContext(FormContext)

///-------------------User Edit-----------------------------------

  const editUser = (e:FormEvent, id:string) =>{
    e.preventDefault();
    
    const userEdit = userform.filter(
      (user) => user.id === id)

      Swal.fire({
        title: "Edit User",
        showCancelButton: true,
        html: `<form class="main__form" style="width:100%;">
                              
            <div class="main__field">
              <textarea
              class="main__input"
              type="text"
              required
              data-name
              >${userEdit[0].name}</textarea>
            </div>
            <div class="main__field">
              <textarea
              class="main__input"
              type="email"
              required
              data-email
              >${userEdit[0].email}</textarea>
            </div>
            <div class="main__field">
              <textarea
              class="main__input"
              type="text"
              required
              data-user
              >${userEdit[0].user}</textarea>
            </div>
            <div class="main__field">
              <textarea
              class="main__input"
              type="password"
              required
              data-password
              >${userEdit[0].password}</textarea>
            </div>
        </form>`,
        confirmButtonText: "Edit",
        preConfirm: () => {
          const name:string = Swal.getPopup().querySelector("[data-name]").value;
          const user:string = Swal.getPopup().querySelector("[data-user]").value;
          const email:string = Swal.getPopup().querySelector("[data-email]").value;
          const password:string = Swal.getPopup().querySelector("[data-password]").value;
          if ( !id ||!name || !user || !email || !password) {
            Swal.showValidationMessage(`Por favor rellene todos los campos`);
          }
          return {
            id:id,
            name: name,
            user: user,            
            email: email,
            password:password
            };
              
          },
        }).then((result) => {
           const data = result.value

           const userIndex = userform.findIndex(
            (user) => user.id === id)

          userform[userIndex] = data

          console.log(userform)

          setUserform(userform)
          
          console.log(userIndex, data )

          Swal.fire ({
            title: "¡Actualización exitosa!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,  
          });
        }) 

///-------------------User Delete-----------------------------------


const deleteUser = (e: FormEvent, id:string) => {
  e.preventDefault();
  Swal.fire({
    title: "Estas seguro?",
    text: `Estás seguro de eliminar el producto? Esta acción es irreversible!`,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminarlo!",
  }).then((result) => {
    if (result.isConfirmed) {
      const updateAddUser = userform.filter(
        (user) => user.id !== id
      );
      setUserform(updateAddUser)
        Swal.fire({
        position: "center",
        icon: "success",
        title: "El producto ha sido eliminado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  })
  
}

     
  }

  return (
    <div className="h-screen pt-8 w-100">
          <h1 className="glitch pt-8">USER LIST</h1>
          <table className="table-fixed pt-8 mt-10 border">
            <thead className="w-screen pt-8 foundation_card__v7VKB border text-gray-700">
              <tr>
                <th style={{ width: "5%" }}>Id</th>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "20%" }}>User</th>
                <th style={{ width: "20%" }}>Email</th>
                <th style={{ width: "20%" }}>State</th>
              </tr>
            </thead>
            <tbody className="foundation_card__v7VKB2 text-center">
              {userform.map((data) => (
                <tr key={data.id}>
                  <td className="border">{data.id}</td>
                  <td className="border">{data.name}</td>
                  <td className="border">{data.user}</td>
                  <td className="border">{data.email}</td>
                  <td>
                    <button className="btn btn-sm btn-primary" onClick={(e) => editUser(e, data.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                    &nbsp;&nbsp;
                    <button className="btn btn-sm btn-danger" onClick={(e) => deleteUser(e, data.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}
