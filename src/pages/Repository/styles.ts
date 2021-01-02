import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }

      @media (max-width: 440px) {
        margin-left: 0;
      }
    }

    @media (max-width: 440px) {
      flex-direction: column;

      strong {
        margin-top: 16px;
      }
    }
  }

  .repo-numbers {
    display: flex;
    margin-top: 32px;

    strong {
      display: block;
      font-size: 36px;
      color: #3d3d4d;
    }

    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }

    .repo-number {
      margin-right: 40px;
    }

    @media (max-width: 440px) {
      flex-direction: column;

      .repo-number {
        margin-top: 16px;

        span {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  width: ${px2vw(1000)};
  max-width: 920px;
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  @media (max-width: 1150px) {
    width: ${px2vw(1250)};
  }

  @media (max-width: 460px) {
    width: ${px2vw(1300)};
  }

  @media (max-width: 415px) {
    width: ${px2vw(1340)};
  }

  @media (max-width: 385px) {
    width: ${px2vw(1345)};
  }

  @media (max-width: 310px) {
    width: ${px2vw(1336)};
  }
`;
