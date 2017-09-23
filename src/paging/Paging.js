import React from 'react';

const Paging = ({count, total}) => {
	const pagesCount = Math.ceil(total/count);

	const generatePages = () => {
		const pages = [];

		for(let i = 1; i <= pagesCount; i++){
			pages.push(
				<li className="page-item" key={`page-${i}`}>
					<a className="page-link" href="#">{i}</a>
				</li>
			)
		}

		return pages;
	};

	return (
		<nav aria-label="Page navigation" className="paging">
			<ul className="pagination">
				{generatePages()}
			</ul>
		</nav>
	)
};

export default Paging;
