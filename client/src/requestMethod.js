import axios from "axios"

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmI1Y2M4YTM1MDQyNjEyNDBiNDMxOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDY0MDU4OSwiZXhwIjoxNjYwODk5Nzg5fQ.b6DxKVc5_4GhBKPIYjU24YjF5CHx-N824qfKslKg62g"

export const publicRequest = axios.create({baseURL: BASE_URL});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: "Bearer ${TOKEN}"},
});