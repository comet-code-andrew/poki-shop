import {FormInputLabel, Input, Group} from './form-input.styles'

const FormInput = ( { label, ...otherProps } ) => {
  return (
    <Group className='group'>
      <Input
             {...otherProps}
        // type='text'
        // required
        // onChange={changeHandler}
        // name='displayName'
        // value={displayName}
      />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </FormInputLabel>
      )}

    </Group>
  )
}

export default FormInput
