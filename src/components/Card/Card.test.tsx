import React from "react";
import renderer from "react-test-renderer";
import { Card } from "./Card";

describe('<Card/>', () => {
  it('should display a Card with a title, body, footer and addionally some children', () => {
    const tree = renderer
    .create(
      <Card
      title="mock-title"
      body="mock-body"
      footer="mock-footer">
        <p>child</p>
      </Card>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  })
})