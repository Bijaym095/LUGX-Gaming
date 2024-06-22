const Components = () => {
  return (
    <>
      {/* Start Gobal Stylings */}
      <section className="container">
        <h1>This is Heading 1</h1>
        <h2>This is Heading 2</h2>
        <h3>This is Heading 3</h3>
        <h4>This is Heading 4</h4>
        <h5>This is Heading 5</h5>
        <h6>This is Heading 6</h6>

        <div className="space-y-2">
          <div>
            <span className="block">.btn</span>
            <a href="#" className="btn">
              SIGN IN
            </a>
          </div>

          <div>
            <span className="block">.btn .btn-primary</span>
            <a href="#" className="btn btn-primary">
              SIGN IN
            </a>
          </div>
        </div>
      </section>
      {/* End Gobal Stylings */}
    </>
  );
};

export default Components;
