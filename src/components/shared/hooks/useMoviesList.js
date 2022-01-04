import { useState } from "react";

const useMoviesList = (ids = []) => {
    const [listContent, setListContent] = useState(<></>);

    useEffect(() => {
        // get movies with ids


        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);

        };
    });

    return listContent;
};

// import React, { useState, useEffect } from 'react';

// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);
//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }
//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }


import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}