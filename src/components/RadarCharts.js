import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

export const sizes = ['small', 'medium', 'large'];

export const radarProps = {
	captions: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
	size: PropTypes.number.isRequired,
	dots: PropTypes.bool,
};

const dash = keyframes`
  from {
    stroke-opacity: 0.3;
  }
  to {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
`;

const filling = keyframes`
  from {
    fill-opacity: 0;
  }
  to {
    fill-opacity: 0.3;
  }
`;

const StyledRadarChart = styled.div`
	text-align: center;
	.caption {
		font-size: 0.8rem;
		text-shadow: none;
	}

	.axis {
		color: black;
	}

	.shape:hover {
		fill-opacity: 1;
	}

	path {
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: ${dash} 4s linear forwards, ${filling} 4s ease-in forwards;
	}
`;

const RadarCharts = ({ captions, data, size, dots }) => {
	return (
		<StyledRadarChart>
			<RadarChart captions={captions} data={data} size={size} dots={dots} axes={true} />
		</StyledRadarChart>
	);
};

RadarCharts.propTypes = radarProps;

RadarChart.defaultProps = {
	dots: true,
	size: 300,
};

export default RadarCharts;
