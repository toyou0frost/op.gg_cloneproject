import React from "react";
import styled from "styled-components";

const ChampionListPageWrapper = styled.div`
    display: flex;
    width: 1080px;
    margin: 0 auto;
    margin-top: 100px;
`

const ChampionsWrapper = styled.div`
    flex: 2;
    background-color: white;
    border-right: 1px solid #e9eff4;
    & > .header {
        display: flex;
        justify-content: space-between;
        padding: 0 17px;
        border-bottom: 1px solid #e9eff4;
        &  > .item-wrap {
            display: flex;
        }
        & > .item-wrap > .item {
            line-height: 60px;
            padding: 0 12px;
            color: rgba(0, 0,0, .6);
            cursor: pointer;
            &.select {
                box-shadow: 0px -3px 0px 0px #5383e8 inset;
                color: #5383e8;
                font-weight: bold;
            }
        }
        & > input {
            width: 200px;
            margin: 10px 0;
            padding: 0 10px;
            border: none;
            background-color: #f7f7f7;
        }
    }
    & > .list {
        height: 100vh;
        background-color: #f7f7f7;
    }
`

const ChampionTrendWrapper = styled.div`
    flex: 1;
    background-color: white;
`

// List of champion page
export default class ChampionsList extends React.Component {
    render() {
        return (
            <ChampionListPageWrapper>
                <ChampionsWrapper>
                    <div className="header">
                        <div className="item-wrap">
                            <div className="item select">전체</div>
                            <div className="item">탑</div>
                            <div className="item">정글</div>
                            <div className="item">미드</div>
                            <div className="item">바텀</div>
                            <div className="item">서포터</div>
                        </div>
                        <input type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"/>
                    </div>
                    <div className="list"></div>
                </ChampionsWrapper>
                <ChampionTrendWrapper>
                    trends
                </ChampionTrendWrapper>
            </ChampionListPageWrapper>
        )
    }
}

