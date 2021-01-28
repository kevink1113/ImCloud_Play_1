import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const titleProps = {
	title: PropTypes.string.isRequired,
};

const StyledTitle = styled.h1`
	text-align: center;
	margin-block-start: 0;
	padding-top: 10px;
	color: black;
	font-size: 1.5rem;
`;

const Title = ({ title }) => {
	return <StyledTitle>{title}</StyledTitle>;
};

Title.propTypes = titleProps;

export default Title;
