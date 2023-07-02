import { FormControl, Input, InputLabel } from '@mui/material'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const TextInput = ({ label, id, ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input id={id} type="text" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </FormControl>
  )
}
export default TextInput
