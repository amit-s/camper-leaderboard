import React from 'react';

export default class LeaderBoardData extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.data.map((userInfo, index)=>{
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