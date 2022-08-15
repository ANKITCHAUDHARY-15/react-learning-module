import React, { Component } from "react";

export default class Student extends Component {
  render() {
    const { name, age, id, skill, collage } = this.props;
    //  Warning: Student: `key` is not a prop. Trying to access it will result in `undefined`
    //  being returned. If you need to access the same value within the child component, you
    //  should pass it as a different prop
    // const { key } = this.props;
    return (
      <div className="row col-sm-12">
        <div>
          I am <b>{name} </b>a student of <b>{collage}</b> I know <b>{skill}</b>
        </div>
      </div>
    );
  }
}
