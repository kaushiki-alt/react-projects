import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type FormInputProps  = {
  name : string;
  control : Control<any>;
}

export const CustomFormField = ({name, control} : FormInputProps) => {
  
  return (
    <FormField 
    control= {control}
    name={name} render={({field}) => (
      <FormItem>
        <FormLabel className="capitalize">{name}</FormLabel>
        <FormControl>
          <Input {...field}/>
        </FormControl>
        <FormMessage />
      </FormItem>
  )}>
    </FormField>
  )
}

type FormSelectProps = {
  name : string;
  control : Control<any>;
  labelText: string;
  items: string[];
}
export const CustomFormSelect = ({name, control, labelText, items}: FormSelectProps ) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({field}) => (
      <FormItem>
        <FormLabel className="capitalize">
          {labelText || name}
        </FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}>

    </FormField>
  )
}