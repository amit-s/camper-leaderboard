import React from 'react';
import LeaderBoardData from './LeaderBoardData.jsx';
import $ from 'jquery';

export default class LeaderBoardContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount(){
		this.getRecentPoints();
	}

	getRecentPoints(){
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
			success: (data)=>this.setState({data}),
			error: (error)=>console.log(error)
		})
		$("#points30").show();
		$("#pointsAll").hide();
	}

	getTotalPoints(){
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime',
			success: (data)=>this.setState({data}),
			error: (error)=>console.log(error)
		})
		$("#points30").hide();
		$("#pointsAll").show();
	}
	render(){
		return(
			<div id="leaderboard">
				<h2 className="text-center">Leaderboard</h2>
				<div id="headingWrapper" className="text-center">
					<div className="colNumber">#</div>
					<div className="colName">Camper Name</div>
					<div className="colPoints colPointsWidth" onClick={this.getRecentPoints.bind(this)}>Points in past 30 days</div>
					<div className="colPoints colPointsWidth" onClick={this.getTotalPoints.bind(this)}>All time points</div>
				</div>
				<div id="leaderboardData">
					<LeaderBoardData data={this.state.data} />
				</div>			
			</div>
			);
	}
}