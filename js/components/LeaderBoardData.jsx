import React from 'react';

export default class LeaderBoardData extends React.Component{
	
	render(){
		let url = "";
		
		return(
			<div>
				{this.props.data.map((userInfo, index)=>{
					url = `www.freecodecamp.com/${userInfo.username}`;
					return(
						<a href={url} target="blank"  key={index}>
						<div className="dataRow">
							<div className="colNumber  text-center">{index+1}</div>
							<div className="colName"><img src={userInfo.img} /> {userInfo.username}</div>
							<div className="colPointsWidth  text-center">{userInfo.recent}</div>
							<div className="colPointsWidth  text-center">{userInfo.alltime}</div>
						</div>
						</a>					
						);
				})}
			</div>
			);
	}
}