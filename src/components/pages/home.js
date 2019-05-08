import React from "react";
import { connect } from "react-redux";

import { setData } from '../../actions';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "999"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "30"
        }
    ]
};

const chartConfigs = {
      type: 'column2d',
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
};


class Home extends React.Component {

	constructor(props)
	{
	    super(props);
	}

	componentDidMount() 
  	{
    	this.props.getAllData();
  	}

	render()
	{
		return(
			<ReactFC {...chartConfigs} />
			);
	}
	
}
 

const mapStateToProps = function(state) {
  return {
    all_data:state.all_data
  }
}

const mapDispatchToProps = {
  getAllData: setData 
} 

export default connect(mapStateToProps,mapDispatchToProps)(Home); 