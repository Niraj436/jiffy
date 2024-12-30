import React from 'react';

const Container = ({ children, className = 'px-6' }) => {
	return <div className={`${className} py-4`}>{children}</div>;
};

export default Container;
