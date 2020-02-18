import React from "react";
import { connect } from "react-redux";

const UnconnectedDemo: React.FC = () => {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        temporibus, optio suscipit dolor eum quasi aliquam harum consequuntur
        reprehenderit odio, modi perspiciatis dolorem nisi cupiditate minus ut
        et quisquam delectus.
      </p>
    </div>
  );
};

export const Demo = connect()(UnconnectedDemo);
