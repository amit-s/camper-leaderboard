import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class LeaderBoardData extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount(){
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
			success: (data)=>{
				this.setState({
					data: data
				});
			},
			error: function(error){
				console.log(error);
			}
		})
	}

	render(){
		return(
			<div>
				{this.state.data.map((userInfo, index)=>{
					return(
						<div className="dataRow text-center" key={index}>
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