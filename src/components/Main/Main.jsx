import './Main.scss'
import { reduxForm, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux';
import { emailValid } from '../../utils/validators/validators';
import { Input } from '../FormControls/FormControls';

const MainForm = (props) => {
  const charCodes = props.valutes.map(item => (<option value={item[1]}>{item[0]}</option>))
  const result = props.formValues?.summ / props.formValues?.valute || 0;
  return (
    <form onSubmit={props.handleSubmit} className="mainForm">
      <Field
        type="number"
        placeholder="Сумма, руб"
        component={Input}
        name='summ'
      />
      <Field
        component="select"
        type="text"
        name="valute"
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
      validate={[emailValid]}
      />
      <button>Записаться на обмен валюты</button>
    </form>
  )
}

const MainReduxForm = reduxForm({ form: 'main' })(MainForm)

const Main = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div className="main">
      <MainReduxForm onSubmit={onSubmit} valutes={props.valutes} formValues={props.formValues}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  valutes: state.init.valutes,
  formValues: getFormValues('main')(state)
})

export default connect(mapStateToProps)(Main);