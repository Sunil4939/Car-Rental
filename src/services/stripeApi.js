import axios from 'axios';
import { STRIPE_SECRET_KEY } from './keys';

export const baseURL = 'https://api.stripe.com/v1/'

const stripeHttp = axios.create({
	baseURL: 'https://api.stripe.com/v1/',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});

stripeHttp.interceptors.request.use(
	async (config) => {
		let token =  STRIPE_SECRET_KEY;
		if (token) config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		return Promise.reject("stripe Api error ",error);
	},
);
export default stripeHttp;
