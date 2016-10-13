import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const lbData = [
	{
		"username":"sjames1958gm",
		"img":"https://avatars.githubusercontent.com/u/4639625?v=3",
		"alltime":3432,
		"recent":592,
		"lastUpdate":"2016-10-09T19:43:34.307Z"
	},
	{
		"username":"wearenotgroot",
		"img":"https://avatars.githubusercontent.com/u/16578279?v=3",
		"alltime":1515,
		"recent":287,
		"lastUpdate":"2016-10-01T17:49:05.327Z"
	},
	{
		"username":"Chrono79",
		"img":"https://avatars.githubusercontent.com/u/9571508?v=3",
		"alltime":1888,
		"recent":252,
		"lastUpdate":"2016-09-29T16:12:19.121Z"
	},
	{
		"username":"maz-net-au",
		"img":"https://avatars.githubusercontent.com/u/9792899?v=3",
		"alltime":1029,
		"recent":243,
		"lastUpdate":"2016-09-29T16:12:03.989Z"
	}
];

class LeaderBoardData extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: lbData
		};
	}
	render(){
		return(
			<div>
				{this.state.data.map((userInfo, index)=>{
					return(
						<div className="dataRow text-center">
							<div className="colNumber">{index+1}</div>
							<div className="colName">{userInfo.username}</div>
							<div className="colPoints">{userInfo.recent}</div>
							<div className="colTotalPoints">{userInfo.alltime}</div>
						</div>
						
						);
				})}
			</div>
			);
	}
}

ReactDOM.render(<LeaderBoardData />, document.getElementById("leaderboardData"));