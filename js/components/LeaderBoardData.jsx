import React from 'react';

export default class LeaderBoardData extends React.Component{
	
	render(){
		return(
			<div>
				{this.props.data.map((userInfo, index)=>{
					return(
						<div className="dataRow" key={index}>
							<div className="colNumber  text-center">{index+1}</div>
							<div className="colName"><img src={userInfo.img} /> {userInfo.username}</div>
							<div className="colPoints  text-center">{userInfo.recent}</div>
							<div className="colTotalPoints  text-center">{userInfo.alltime}</div>
						</div>						
						);
				})}
			</div>
			);
	}
}