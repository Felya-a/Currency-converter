import './FormControls.scss';
import * as cn from 'classnames';

const FormsControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <props.name {...props} {...input} className={cn("formControl", { error: hasError })}></props.name>
  )
}

export const Input = (props) => {
  return <FormsControl name="input" {...props} />
}