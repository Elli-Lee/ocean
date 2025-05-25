import styled from 'styled-components';

type CardContainerProps = {
  $dark?: boolean;
};

const CardContainer = styled.div.attrs({
  className: 'card-container',
})<CardContainerProps>`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${(props) =>
    props.$dark &&
    `
      background-color: black;
      color: white;
      border: none;
    `}
`;

const Card = () => {
  return (
    <CardContainer $dark>
      <h2> Styled Component </h2>
      <p> 이것은 styled-components로 만든 카드입니다.</p>
    </CardContainer>
  );
};

export default Card;
