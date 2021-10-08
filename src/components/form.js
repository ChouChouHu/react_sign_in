import useForm from '../customHook/useForm';

export default function Form() {
  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: '', password: '', rememberMe: false },
    validation: (values) => {
      const errors = {}
      if (!values.account) {
        errors.account = '請輸入帳號'
      } else if (!values.password) {
        errors.password = '請輸入密碼'
      }
      return errors
    },
    onSubmit: (values) => console.table(values),
  })
  return (
    <div className="eachQuestion">
    ● React Custom Hook<br/ >

    <input name='account' onChange={handleChange} value={values.account}
    placeholder='Account' /><br/ >
    {errors.account && (<div>{errors.account}</div>)}
    <input name='password' onChange={handleChange} value={values.password}
    placeholder='password' /><br/ >
    {errors.password && (<div>{errors.password}</div>)}
    <label><input type='checkbox' name='rememberMe' onChange={handleChange}
    checked={values.rememberMe} />Remember Me</label><br/ >
    <button onClick={handleSubmit}>Login</button> </div>
  )
}
