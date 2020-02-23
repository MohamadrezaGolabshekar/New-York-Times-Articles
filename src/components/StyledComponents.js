import styled from 'styled-components';

const headerHeight = 70;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: ${headerHeight}px;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: rgb(54, 71, 78);
    h1 {
        margin: 0;
    }
`;

export const HorizontalFlex = styled.div`
    display: flex;
    align-items: center;
`;

export const SortWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    padding: 0 15px;
    cursor: pointer;
`;


export const Title = styled.h1`
    display: inline-block;
    color: ${({color}) => color || '#fff'};
    font-weight: 500 !important;
    @media(max-width: 768px) {
       font-size: 17px;
    }
`;

export const ArticleItemImg = styled.img`
    width: ${({ width }) => width || '300px'};
    height: ${({ height }) => height || 'auto'};
    border-radius: 3px;
`;

export const ContainerWrapper = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
`

export const ArticleListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    padding: 30px 0;
    @media(max-width: 768px) {
        padding: 40px 0;
    }
`;

export const ArticleTitle = styled.h2`
    text-align: center;
    padding: 20px;
    font-weight: 700;
    color: black;
`;

export const H4 = styled.h4`
    margin: 0;
    text-align: center;
    font-weight: 700;
    color: black;
`;

export const P = styled.p`
    text-align: center;
    padding: 15px;
    font-weight: 700;
    color: black;
`;

export const ArticlePubTime = styled.p`
    padding: 10px;
    text-align: center;
    color: black;
`;

export const ResumeItemWrapper = styled.div`
    border: 1px solid #ececec;
    width: 150px;
    border-radius: 5px;
    margin: 5px;
    font-size: 11px;
`;

export const ResumeListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    align-items: center;
`;

export const ResumeTitle = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    padding: 5px 2px;
`;

export const CenterContainer = styled.div`
    width: 100%
    height: calc(100vh - ${headerHeight}px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.p`
    font-size: 18px;
    padding: 10px;
    color: ${({color}) => color || '#0b4f90'};
`;