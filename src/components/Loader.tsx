import './Loader.css';

export const Loader = () => {
  return (
    <div className="container-loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
