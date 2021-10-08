import { useState } from 'react'

export default function useForm(agrs) {
  const [values, setValues] = useState(agrs.initialValues)
  const [errors, setErrors] = useState({})

  return {
    handleChange: (e) => {
      const inputName = e.target.getAttribute('name')
      setValues(prevState => ({
        ...prevState,
        [inputName]: (e.target.type === 'checkbox')? e.target.checked : e.target.value,
      }))
    },
    handleSubmit: (e) => {
      e.preventDefault()
      let validate = agrs.validation(values)
      if (!validate.account && !validate.password) agrs.onSubmit(values)
      setErrors(validate)
    },
    values,
    errors
  }
}
