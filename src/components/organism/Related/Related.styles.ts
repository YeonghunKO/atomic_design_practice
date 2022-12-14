import { device } from '@src/components/particles/MediaQueries';
import styled from 'styled-components';

const StyledRelated = styled.section`
  ${({ theme }) => theme.flexColumn}
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;

  h5 {
    color: ${({ theme }) => theme.grey500};
  }

  .related__brief {
    color: ${({ theme }) => theme.grey700};
  }

  .related__article__wrapper {
    padding: 1rem;
    gap: 1rem;

    ${({ theme }) => theme.flexColumn};

    @media ${device.sm} {
      flex-direction: row;
    }
  }

  .related__article {
    ${({ theme }) => theme.flexColumn};

    & * {
      margin: 0.5rem 0;
    }
    img {
      min-height: auto;
      min-width: auto;
      background-size: cover;
    }
  }
`;

export default StyledRelated;
