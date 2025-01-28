import axios from "axios";
const baseurl = "http://localhost:8081";

export const get = async (url: string) => {
	const response = await axios.get(baseurl + url, { withCredentials: true });
	return response.data;
};

export const post = async (url: string, data: any) => {
	const response = await axios.post(baseurl + url, data, {
		withCredentials: true,
		headers: {
			"Content-Type": "application/json"
		}
	});
	return response.data;
};

export const put = async (url: string, data: any) => {
	const response = await axios.put(baseurl + url, data, {
		withCredentials: true
	});
	return response.data;
};

export const delete_ = async (url: string) => {
	const response = await axios.delete(baseurl + url, { withCredentials: true });
	return response.data;
};
