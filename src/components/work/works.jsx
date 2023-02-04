import React from 'react';
import { projectsData, projectsNav } from './data';

const Works =() => {
	return (
		<div>
		<div className="work_filters">
			{projectsNav.map((item, index) => {
				return (
					<span className="work_item" key={index}>{item.name}</span>
				);
			})}
		</div>

		<div className="work_container"></div>
		</div>
	)
}

export default Works