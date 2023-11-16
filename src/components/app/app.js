import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css'


const App = () => {

	const data = [
		{label:"Going to learn React", id: 'wqdq'},
		{label:"That is so good", id: "qqdwr"},
		{label:"I need more power!!!", id: "utyhh"}
	];

	return (
		<div className="app">
			<AppHeader/>
				<div className="search-panel d-flex">
					<SearchPanel/>
					<PostStatusFilter/>
				</div>
				<PostList posts={data}/>
				<PostAddForm/>
		</div>
	)
}

export default App;