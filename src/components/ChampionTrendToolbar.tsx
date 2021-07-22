import styled from "styled-components";
import ChampionTrendItemCss from "../components/ChampionTrendHeader"

const ChampionTrendToolbar = styled.div`
    ${ChampionTrendItemCss};
    & > div{
        flex: 1;
        background-color: white;
        border: 1px solid #e9eff4;
        text-align: center;
        font-size: 12px;
        cursor: pointer;
        padding: 10px 0;
        font-weight: bold;
        color: rgba(0, 0,0, .6);

        &:not(:first-child){
            border-left: none;
        }

        &.select{
            color: black;
        }
    }
`

export default ChampionTrendToolbar;