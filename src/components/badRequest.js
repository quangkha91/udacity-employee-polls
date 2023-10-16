const BadRequest = () => {
  return (
    <div class="error-container">
      <h1>404 - Bad Request</h1>
      <p>
        Your request could not be processed because it was invalid or
        incomplete.
      </p>
      <p>Please check your request and try again.</p>
      <a href="/">Go to the homepage</a>
    </div>
  );
};

export default BadRequest;
