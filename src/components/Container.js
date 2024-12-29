import React from 'react';

const Container = ({ children, className }) => {
	return <div className={`${className} px-10 py-4`}>{children}</div>;
};

export default Container;
