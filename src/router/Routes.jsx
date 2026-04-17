import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import HomePage from '../pages/homepage/HomePage';
import Timeline from '../pages/timeline/Timeline';
import Stats from '../pages/stats/Stats';
import FriendsPage from '../pages/friendspage/FriendsPage';
import FriendDetails from '../pages/friendDetails/FriendDetails';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>
        },
        {
          path: '/timeline',
          element: <Timeline></Timeline>
        },
        {
          path: '/stats',
          element: <Stats></Stats>
        },
        {
          path: '/friends',
          element: <FriendsPage></FriendsPage>
        },
        {
            path: '/friends/:id',
            element: <FriendDetails></FriendDetails>
        }
      ],
      errorElement: <h2>Sorry page Not Found</h2>
    },
  ]
);
