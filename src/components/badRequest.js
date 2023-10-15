import { connect } from "react-redux";

const BadRequest = () => {
  return (
    <div>
      <h1 className="title">Error 404</h1>
      <hr className="title-line" />
      <h2>Page not found</h2>
    </div>
  );
};
export default connect()(BadRequest);
