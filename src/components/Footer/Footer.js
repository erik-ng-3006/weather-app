import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
	return (
		<footer className={classes.footer}>
			created by{' '}
			<a
				target='_blank'
				rel='noreferrer'
				href='https://github.com/erik-ng-3006'
			>
				erik-ng
			</a>{' '}
			- devChallenges.io
		</footer>
	);
};

export default Footer;
