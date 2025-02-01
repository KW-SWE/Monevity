import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';

const CustomInput = ({ form, name, label, placeholder, type }) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type}
                {...field} // spread is used to pass all props of { field } as individual  props to component, accessible via field....
              />
            </FormControl>
            <FormMessage className="form-message mt-2"></FormMessage>
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
