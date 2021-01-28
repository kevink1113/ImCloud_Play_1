import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Title from './components/Title';

export const learnmoreProps = {
	title: PropTypes.string,
	desc: PropTypes.string,
	finish: PropTypes.string,
	changeLog: PropTypes.func,
};

const StyledLearnMore = styled.div`
	min-height: 100vh;
	vertical-align: middle;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LearnMoreBox = styled.div`
	background: white;
	width: 700px;
	padding: 20px 0;
	text-align: center;
	@media (max-width: 700px) {
		width: 100vw;
	}
`;

const LoginOutTmp = styled.div`
	margin: 2.5rem;
`;

const LoginOutMsg = styled.div`
	margin-bottom: 10%;
	padding: 0 10px;
`;

class UserGreeting extends Component {
	render() {
		return (
			<div>
				<Title title={this.props.title} />
				<LoginOutMsg> {this.props.desc} </LoginOutMsg>
			</div>
		);
	}
}

class EndPlay1 extends Component {
	render() {
		return (
			<LoginOutTmp>
				<a
					href="/"
					onClick={function (e) {
						e.preventDefault();
						this.props.changeLog();
					}.bind(this)}
				>
					{this.props.finish}
				</a>
			</LoginOutTmp>
		);
	}
}

class LearnMore extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			title: '더 알아보기',

			desc: 'hello world',
			descLogout: '더 재미있는 play기능과 LookyLooks 서비스를 이용하고 싶으시면 로그인 하세요!',
			descLogin: '다른 재미있는 play기능도 이용해보세요!',

			finish: 'hello',
			guestPlayFinish: '더 알아보기',
			userPlayFinish: '다른 Play 해보기',
		};
	}

	render() {
		return (
			<StyledLearnMore>
				<LearnMoreBox>
					{this.state.isLoggedIn ? (
						<div>
							<UserGreeting title={this.state.title} desc={this.state.descLogin}></UserGreeting>
							<Button link="/" label={this.state.userPlayFinish} size="large" />
						</div>
					) : (
						<div>
							<UserGreeting title={this.state.title} desc={this.state.descLogout}></UserGreeting>
							<Button link="/" label={this.state.guestPlayFinish} size="large" />
						</div>
					)}

					{/* 아래는 로그인 상태 바꾸는 임시 기능*/}

					<EndPlay1
						changeLog={() => {
							this.setState({
								isLoggedIn: true,
							});
						}}
						finish="로그인 상태로 (임시)"
					></EndPlay1>
					<EndPlay1
						changeLog={() => {
							this.setState({
								isLoggedIn: false,
							});
						}}
						finish="로그아웃 상태로 (임시)"
					></EndPlay1>
				</LearnMoreBox>
			</StyledLearnMore>
		);
	}
}

UserGreeting.propTypes = EndPlay1.propTypes = learnmoreProps;

export default LearnMore;
