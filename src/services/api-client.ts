import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '65a4c9e5a4664f439b5d3b609e217d4a',
	},
});
