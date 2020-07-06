import React from "react";
import renderer from "react-test-renderer";
import { Card } from "./Card";
import { MOCK_TITLE, MOCK_BODY, MOCK_FOOTER } from "./fixtures";

describe('<Card/>', () => {
  it('should display a Card with a title, body, footer and addionally some children', () => {
    const tree = renderer
    .create(
      <Card
      title={MOCK_TITLE}
      body={MOCK_BODY}
      footer={MOCK_FOOTER}>
        <p>child</p>
      </Card>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  })
})