import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRobot } from "../features/robots/CardList";

export const robotsApi = createApi({
  reducerPath: "robotsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getRobotsList: builder.query<[IRobot], void>({
      query: () => "users/",
    }),
  }),
});

export const { useGetRobotsListQuery } = robotsApi;
