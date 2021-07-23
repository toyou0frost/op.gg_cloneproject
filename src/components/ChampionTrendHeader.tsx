import styled, {css} from "styled-components";

export const ChampionTrendItemCss = css`
    display: flex;
    align-items: center;
    & > div {
        text-align: center;
        color: rgba(0,0,0,.6);
    }
`

const ChampionTrendHeader = styled.div`
    ${ChampionTrendItemCss};
    padding: 15px;
    & > div {
        flex: 1;
        font-size: 12px;
        &:nth-child(1) {
            flex: 0.5;
            text-align: center;
        }
        &:nth-child(2) {
            flex: 3;
        }
    }
`

export default ChampionTrendHeader;