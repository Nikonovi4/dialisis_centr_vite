import './ErrorsBlock.scss'

const ErrorsBlock = ({ errors }) => {
  return (
    <div className="errors__block">
      <span>{errors?.title}</span>
      <span>{errors?.description}</span>
      <span>{errors?.operationTime}</span>
    </div>
  );
};

export default ErrorsBlock;
