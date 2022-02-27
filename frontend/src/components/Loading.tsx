import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const DualRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary} transparent ${({ theme }) => theme.color.primary} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/** Load spinner */
const Loading = () => {
  return (
    <Wrapper>
      <DualRing />
    </Wrapper>
  );
};

export default Loading;
