import React from 'react';
import $ from 'jquery';

export default class LeaderBoardData extends React.Component{
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
					data
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