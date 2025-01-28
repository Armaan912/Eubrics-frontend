import { delete_, get, post, put } from "./http-client";

export const getcustomers = async () => {
	const response = await get(`/customer/`);
	return response;
};

export const postcustomers = async (data: { improvement: string }) => {
	const response = await post(`/customer/create`, data);
	return response;
};

export const updateCustomers = async (data: {
	id: string;
	improvement: string;
}) => {
	const response = await put(`/customer/update/${data.id}`, data);
	return response;
};

export const deletecustomers = async (id: string | number) => {
	const response = await delete_(`/customer/${id}`);
	return response;
};
