import './form-input.styles.scss'

const FormInput = ( { label, ...otherProps } ) => {
  return (
    <div className='group'>
      <input className='form-input'
             {...otherProps}
        // type='text'
        // required
        // onChange={changeHandler}
        // name='displayName'
        // value={displayName}
      />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      )}

    </div>
  )
}

export default FormInput
