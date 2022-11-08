import * as s from './home.layout.styles';

const HomeLayout = () => {
  return (
    <s.Container>
      <s.Section>
        <s.Title>
          Awesome Template <s.Strong>NextJS</s.Strong> for{' '}
          <s.Strong>Digital House</s.Strong> students.
        </s.Title>
        <s.Description>
          Made with NextJS, TypeScript, Styled Components and Design Tokens.
        </s.Description>
      </s.Section>
    </s.Container>
  );
};

export { HomeLayout };
