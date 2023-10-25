import { useState } from 'react'
import { User } from '../types/User';
import FormContext from './FormContext';

export const FormProvider = ({ children }: CartProviderProps) => {

  
  const [userform, setUserform] = useState<User[]>([]);
  
  
    return (
      <FormContext.Provider value={
          { 
            userform, setUserform
          }
          }>
        {children}
      </FormContext.Provider>
    );
}
