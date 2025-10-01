import  classes from './Loading.module.css';

function Loading() {
  return (
    <div className={`d-flex justify-content-center ${classes.fullScreen}`}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
