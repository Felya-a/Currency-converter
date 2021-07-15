import './Main.scss'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux';
import { emailValid, required } from '../../utils/validators/validators';
import { Input } from '../FormControls/FormControls';
import { sendMailTC } from '../../redux/initializeReducer'

const MainForm = (props) => {
  const charCodes = props.valutes.map((item, index) => (<option value={index}>{item[0]}</option>))
  charCodes.unshift(<option value="" disabled selected>Выберите валюту</option>)

  const result = props.formValues?.valute && props.formValues?.summ ? props.formValues?.summ / props.valutes[props.formValues?.valute][1] : 0
  return (
    <form onSubmit={props.handleSubmit} className="mainForm">
      <Field
        type="number"
        placeholder="Сумма, руб"
        component={Input}
        name='summ'
        validate={[required]}
      />
      <Field
        component="select"
        type="text"
        name="valute"
        validate={[required]}
      >
        {charCodes}
      </Field>
      <div>
        <p>Results:</p>
        <p className="result">{result.toFixed(2)}</p>
      </div>
      <Field
        type="email"
        placeholder="Email"
        component={Input}
        name='email'
        validate={[emailValid, required]}
      />
      <button>Записаться на обмен валюты</button>
    </form>
  )
}

const MainReduxForm = reduxForm({ form: 'main' })(MainForm)

const Main = (props) => {
  const onSubmit = (data) => {
    data.charCode = props.valutes[data.valute][0]
    data.value = props.valutes[data.valute][1]
    data.result = (data.summ / data.value).toFixed(2)
    delete data.valute
    props.sendMailTC(data)
  }
  return (
    <div className="main">
      <MainReduxForm onSubmit={onSubmit} valutes={props.valutes} formValues={props.formValues} />
      <i>Для наглядности сообщение отправится на введенный email</i>
    </div>
  )
}

const mapStateToProps = (state) => ({
  valutes: state.init.valutes,
  formValues: getFormValues('main')(state)
})

export default connect(mapStateToProps, { sendMailTC })(Main);