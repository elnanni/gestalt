import { create } from 'react-test-renderer';
import Datapoint from './Datapoint';

describe('Datapoint', () => {
  it('renders', () => {
    const tree = create(
      <Datapoint
        title="Title"
        trend={{ value: 30, accessibilityLabel: 'Value change icon accessibility label' }}
        trendSentiment="good"
        value="1M"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an accessibility label', () => {
    const tree = create(
      <Datapoint
        title="Title"
        trend={{ value: 30, accessibilityLabel: 'Value change icon accessibility label' }}
        value="1M"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a tooltip', () => {
    const tree = create(
      <Datapoint
        title="Title"
        tooltipText="This is a good sign"
        trend={{ value: 30, accessibilityLabel: 'Value change icon accessibility label' }}
        value="1M"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a badge', () => {
    const tree = create(
      <Datapoint
        badge={{ text: 'Early access' }}
        title="Title"
        trend={{ value: 30, accessibilityLabel: 'Value change icon accessibility label' }}
        value="1M"
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('validate data test id for Datapoint', () => {
    const component = create(
      <Datapoint
        badge={{ text: 'Early access' }}
        dataTestId="test"
        title="Title"
        tooltipText="This is a good sign"
        trend={{ value: 30, accessibilityLabel: 'Value change icon accessibility label' }}
        value="1M"
      />,
    ).root;
    expect(
      component
        .findAll((element) => element.type === 'div')
        .filter((node) => node.props['data-test-id'] === 'test'),
    ).toHaveLength(1);
  });
});
