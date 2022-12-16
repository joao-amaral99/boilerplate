import GlobalStyles from '../src/styles/global';

const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];

export default decorators;
