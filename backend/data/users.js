import bcrypt from 'bcryptjs';

const seedUsers =  

[
		{
			name: 'John Doe',
			email: 'john@example.com',
			password: bacrypt.hashSync('123456')
			image: 'https://avatar.iran.liara.run/public',
			deliveryAddress: '123 Main St, New York, NY',
			badges: ['newari_pasa ', 'mithila_mitra'],
			challengeIds: [], 
		},
		{
			name: 'Jane Smith',
			email: 'jane@example.com',
			password: bacrypt.hashSync('123456')
			image: 'https://avatar.iran.liara.run/public',
			deliveryAddress: '456 Elm St, Los Angeles, CA',
			badges: ['tibetan_rokpa', 'sakahari_sikari'],
			challengeIds: [],
		},
		{
			name: 'Samip Johnson',
			email: 'alice@example.com',
			password: bacrypt.hashSync('123456')
			image: 'https://avatar.iran.liara.run/public',
			deliveryAddress: '789 Oak St, Chicago, IL',
			badges: [], 
			challengeIds: [], 
		},
	];

export default seedUsers;
