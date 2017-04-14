var React = require('react');

// small-centered scales up and centers it for medium and large
var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p> Main.jsx rendered </p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
