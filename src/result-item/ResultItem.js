import React from 'react';

const ResultItem = ({name, details}) => {
	return (
		<div className="card result__item pointer">
			<div className="card-body">
				<span>{name}</span><br/>
				<small className="text-muted">{details}</small>
			</div>
		</div>
	)
};

export default ResultItem;
