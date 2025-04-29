/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/api/ApiClient";

export const uploadJournalApi = async (data: any) => {
    const response = await apiClient.post('/journal/add', data);
    return response.data
}

export const fetchAllJournalApi = async () => {
    const response = await apiClient.get('/journal/');
    return response.data
}