import { Avatar, Button, IconButton } from '@material-ui/core';
import styled from "styled-components"; //npm install --save styled-components
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from 'email-validator';
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';

function Sidebar() {

  const [user] = useAuthState(auth); // we get the current users authetifications
  const userChatRef = db.collection('chats').where('users', 'array-contains', user.email); // to access to firestore and queries the user array for check where emails are seen ... it should give us all of the chats
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );
    // if there is not input, stop execution
    if(!input) return null;

    // check if the chat alredy exists
    // npm install email-validator
    if(
      EmailValidator.validate(input) && 
      !chatAlredyExists(input) && 
      input !== user.email
    ) { // if the email is valid, I need to push this to database, and if the chat doesn't exists, and check that you can't chat with yourself
      // We need to add the chat into the DB 'chats' collection if it doesn't alredy exists and is valid
      db.collection('chats').add({
        users: [user.email, input], // we set an input because you have to write for look for you want to chat with
      });
    }
  };

  const chatAlredyExists = (recipientEmail) => // return...
    !!chatsSnapshot?.docs.find( // we make double bound (double exclamation marks)
      (chat) => 
        chat.data().users.find((user) => user === recipientEmail)?.length > 0 // it goes true if the users are found with recipientEmail and its number is >0, it return an element or return false or indefined
    );

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* List of Chats */}
      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default Sidebar;

// npm install @material-ui/core
// npm install @material-ui/icons
// install the extension "styled components snippets"

const Container = styled.div`
  flex: 0.45;
  border-right: 1px solid whitesmoke;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /*IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  width : 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;