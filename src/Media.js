import React from 'react';
import styled from 'styled-components';
import MediaItem from './components/MediaItem';
import Title from './components/Title';

const MediaContainer = styled.div`
	padding-top: 0px;
	padding-right: 0px;
	padding-left: 0px;
	background-color: rgb(228, 230, 224);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FlexContainer = styled.div`
	padding-top: 25px;
	margin-top: 0px;
	text-align: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

function Media() {
	return (
		<MediaContainer>
			<Title title="인플루언서의 PICK" />
			<FlexContainer>
				<MediaItem
					link="/"
					src="./book001.jpg"
					size="book"
					title="Book!"
					// text="현재는 defaultProps로 대체됨."
				></MediaItem>

				<MediaItem link="/" src="./music001.jpg" size="music" title="Music!"></MediaItem>

				<MediaItem link="/" src="./movie001.jpg" size="movie" title="Movie!"></MediaItem>
			</FlexContainer>
		</MediaContainer>
	);
}

export default Media;
