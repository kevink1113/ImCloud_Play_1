import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import RadarCharts from './components/RadarCharts';

const StyledStat = styled.div`
	min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
`;

const ViewContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	margin: 1rem;
	align-items: center;
	align-content: center;
`;

const ViewText = styled.div`
	width: 400px;
	margin: 2rem;
	margin-left: 4rem;
	@media (max-width: 876px) {
		margin-left: 2rem;
	}
`;

const data = [
	{
		data: {
			battery: 0.7,
			design: 0.8,
			useful: 0.9,
			speed: 0.67,
			weight: 0.8,
			hello: 0.7,
			hallo: 0.5,
			hbello: 0.7,
			hcello: 0.5,
			hdello: 0.6,
		},
		meta: { color: 'blue' },
	},
	{
		data: {
			battery: 0.6,
			design: 0.85,
			useful: 0.5,
			speed: 0.6,
			weight: 0.7,
			hello: 0.6,
			hallo: 0.7,
			hbello: 0.6,
			hcello: 0.55,
			hdello: 0.7,
		},
		meta: { color: 'red' },
	},
];

const captions = {
	// columns
	battery: 'Contemporary',
	design: 'Formal',
	useful: 'Urban',
	speed: 'Feminine',
	weight: 'Basic',
	hello: 'Boyish',
	hallo: 'Unique',
	hbello: 'Business',
	hcello: 'Feminine',
	hdello: 'Basic',
};

class StyleStat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		this.setState({});
	}

	render() {
		return (
			<StyledStat>
				<Title title="스타일 유형에 대한 설명" />
				<ViewContainer>
					<ViewText>
						<h3>스타일 유형</h3>
						<p>
							&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec leo
							neque. Pellentesque sed&quot;
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec leo neque.
							Pellentesque sed est mattis, rhoncus elit eu,tortor quis interdum fermentum, magna leo
							pulvinar arcu, cursus rhoncus nulla turpis quis sem. Aenean lacinia efficitur ex, eget
							lobortis purus ven
						</p>
					</ViewText>
					<RadarCharts captions={captions} data={data} size={300} />
				</ViewContainer>
			</StyledStat>
		);
	}
}

export default StyleStat;
