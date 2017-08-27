
import React from 'react';
import ReactDOM from 'react-dom';
import Display from "./display";

const SCALE = 50.0;

document.addEventListener("DOMContentLoaded", function(){
  const root = document.getElementById("root");
  ReactDOM.render(
		  <div>
			     <Display/>
      </div>
	, root);
});
