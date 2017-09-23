import React, {Component} from 'react';
import classnames from 'classnames';

import './App.css';

import ResultItem from './result-item/ResultItem'
import Paging from './paging/Paging'
import {getFakeData} from "./utils/mocks";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchVal: '',
			searchResults: [],
			totalResults: 0,
			page: 0
		};

		this.onInput = this.onInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}


	render() {
		return (
			<div>
				<div className={classnames('row h-50 search__input', {
					'has-results': this.state.searchResults.length
				})}>
					<div className="col-sm-12 h-100 d-table">
						{this.form()}
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12 result__items">
						{this.state.searchResults.map((item) => (
							<ResultItem key={item.name} name={item.name} details={item.details}/>
						))}
					</div>
				</div>
				{
					this.state.searchResults.length>0 &&
					<Paging count={this.state.searchResults.length} total={this.state.totalResults}/>
				}
			</div>
		);
	}

	form() {
		return (
			<div className="row">
				<div className="col-lg-offset-3 col-lg-6">
					<form onSubmit={this.onSubmit}>
						<div className="input-group">
							<input
								type="text"
								className="form-control"
								placeholder="Type to search"
								value={this.state.searchVal}
								onInput={this.onInput}
							/>
							<span className="input-group-btn">
						        <button className="btn btn-primary pointer" type="submit">Search</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		)
	}

	onInput(e) {
		this.setState({searchVal: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.state.searchVal.length === 0) {
			return false;
		}

		getFakeData('search-results').then((results)=> {
			this.setState({
				searchResults: results.data,
				totalResults: results.total,
			})
		})
	}
}

export default App;
