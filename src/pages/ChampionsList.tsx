import axios from "axios";
import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Champion from "../components/Champion"
import ChampionModel from "../models/ChampionModel";
import ChampionIcon from "../assets/icon-champion-p.png";
import ChampionTrenditem from "../components/ChampionTrenditem";
import ChampionTrendHeader from "../components/ChampionTrendHeader"
import ChampionTrendToolbar from "../components/ChampionTrendToolbar"


const ChampionListPageWrapper = styled.div`
    display: flex;
    width: 1080px;
    margin: 0 auto;
    margin-top: 100px;
`

const ChampionsWrapper = styled.div`
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
        width: 564px;
        background-color: #f7f7f7;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
    }
`

const ChampionTrendWrapper = styled.div`
    flex: 1;
    background-color: white;

    & > .trend-header{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        align-items: center;
        border-bottom: 1px solid #e9eff4;

            & > .trend-item{
                height: 60px;
                color: rgba(0, 0,0, .6);
                cursor: pointer;
                line-height: 60px;
                padding: 0 15px;
                font-size: 14px;
                position: relative;
                align-items: center;

                &:first-child{
                    font-weight: bold;
                    flex: 3;
                    text-align: left;
                    color: black;
                }

                & > img{
                    height: 17px;
                    margin-right: 5px;
                }

                &:not(:last-child):not(:first-child)::after{
                    content: "";
                    width: 1px;
                    height: 20px;
                    background-color: #eee;
                    position: absolute;
                    right: -4px;
                    top: 35%;
                }

                &:last-child{
                    margin-right: 15px;
                }

                &.select {
                        box-shadow: 0px -3px 0px 0px #5383e8 inset;
                        color: #5383e8;
                        font-weight: bold;
                }
            }
        
    }

    & > .trend-list{
        height: 100vh;
        background-color: #f7f7f7;
        padding: 20px;
    }

`

// List of champion page


interface ChampionListProps{

}

interface ChampionListState{
    allChampions: ChampionModel[];
    champions: ChampionModel[];
    type:string;
    input:string;
}

export default class ChampionsList extends React.Component<ChampionListProps, ChampionListState> {

    constructor(props: ChampionListProps){
        super(props);

        this.state = {
            allChampions: [],
            champions: [],
            type: "ALL",
            input: "",
        }
    }

    onChangeType = (type: string) => () => {
        this.setState({
            type,
            champions: this.filterChampions(type).filter(champ => champ.name?.includes(this.state.input)),
        });
    }

    onChangeInput = (input:string) => {
        this.setState({
            input,
            champions: this.changeChampion(input),
        });
    }

    async componentDidMount(){
        const response = await axios.get("http://opgg.dudco.kr/champion");
        const allChampions = response.data.map((data: any) => 
            new ChampionModel({
                id: data.id, 
                name: data.name, 
                key: data.key, 
                position: data.position
            })
        );

        this.setState({
            allChampions,
            champions: allChampions,
        });
    }
    
    changeChampion = (value: string) => {
        if(value !== ""){
            return this.filterChampions(this.state.type).filter(c => c.name!!.includes(value));
        }
        else{
            return this.state.allChampions;
        }
    }

    filterChampions = (type: string) => {
        console.log(type+"type");
        switch (type){
            case "TOP":
                return this.state.allChampions.filter(c => c.position!!.indexOf("탑") > -1);
            case "JUG":
                return this.state.allChampions.filter(c => c.position!!.indexOf("정글") > -1);
            case "MID":
                return this.state.allChampions.filter(c => c.position!!.indexOf("미드") > -1);
            case "ADC":
                return this.state.allChampions.filter(c => c.position!!.indexOf("바텀") > -1);
            case "SUP":
                return this.state.allChampions.filter(c => c.position!!.indexOf("서포터") > -1);
            default: 
                return this.state.allChampions;
        }
    }

    render() {
        return (
            <ChampionListPageWrapper>
                <ChampionsWrapper>
                    <div className="header">
                        <div className="item-wrap">
                            <div className={classnames("item", {select: this.state.type === "ALL"})} onClick={this.onChangeType("ALL")}>전체</div>
                            <div className={classnames("item", {select: this.state.type === "TOP"})} onClick={this.onChangeType("TOP")}>탑</div>
                            <div className={classnames("item", {select: this.state.type === "JUG"})} onClick={this.onChangeType("JUG")}>정글</div>
                            <div className={classnames("item", {select: this.state.type === "MID"})} onClick={this.onChangeType("MID")}>미드</div>
                            <div className={classnames("item", {select: this.state.type === "ADC"})} onClick={this.onChangeType("ADC")}>바텀</div>
                            <div className={classnames("item", {select: this.state.type === "SUP"})} onClick={this.onChangeType("SUP")}>서포터</div>
                        </div>
                        <input type="text" placeholder="챔피언 검색 (가렌, ㄱㄹ, ...)"  onChange={e => this.onChangeInput(e.target.value)}/>
                    </div>
                    <div className="list">
                        {
                            this.state.champions.map((data) => 
                                <Champion 
                                    key={data.id} 
                                    id={Number(data.id) || 0}
                                    position={data.position || []} 
                                    name={data.name || ""} 
                                />
                            )
                        }
                        {[1,2,3,4,5,6].map(() => <div style={{width: "82px", height: 0}} />)}
                    </div>
                </ChampionsWrapper>
                <ChampionTrendWrapper>
                    <div className="trend-header">
                        <div className="trend-item">챔피언 순위</div>
                        <div className="trend-item select"><img src={ChampionIcon} alt="champion" /> 티어</div>
                        <div className="trend-item">승률</div>
                        <div className="trend-item">픽률</div>
                        <div className="trend-item">밴률</div>
                    </div>
                    <div className="trend-list">
                        <ChampionTrendToolbar className="list-item">
                            <div hidden={true}>전체</div>
                            <div className="select">탑</div>
                            <div>정글</div>
                            <div>미드</div>
                            <div>바텀</div>
                            <div>서포터</div>
                        </ChampionTrendToolbar>
                        <ChampionTrendHeader className="list-item">
                            <div>#</div>
                            <div>챔피언</div>
                            <div>승률</div>
                            <div>픽률</div>
                            <div>티어</div>
                        </ChampionTrendHeader>
                        <ChampionTrenditem></ChampionTrenditem>
                    </div>
                </ChampionTrendWrapper>
            </ChampionListPageWrapper>
        )
    }
}
