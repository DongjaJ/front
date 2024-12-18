import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  position: relative;
  padding: 6px 16px 20px 16px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const GoToBackButton = styled.div`
  position: absolute;
  padding-right: 20px;
  left: 16px;
`;

export const PageTitle = styled.span<{ color: string }>`
  display: flex;
  justify-content: center;
  ${({ color }) => `color:${color};`}
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;
