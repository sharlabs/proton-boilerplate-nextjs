import React from "react";
import Footer from "./Footer";
import {
  Container,
  HeaderInner,
  MainProfileImg,
  Header,
  Bar,
} from "./styles";
import { darkTheme, lightTheme } from './Theme';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

const SignedIn = ({ logout, error, accountData }): JSX.Element => {
  const darkMode = useDarkMode(false);
  const theme = darkMode.value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <HeaderInner>
            {darkMode.value ? <img src="/logo_white.svg" width="120" height="50" /> : <img src="/logo.svg" width="120" height="50" />}
            <div style={{display: 'flex', width: '95px', alignItems: 'center', justifyContent: 'space-around'}}>
              <span style={{fontSize: '14px'}}>English</span>
              <i className="css-8bmaul"></i>
              {darkMode.value ? 
              <svg style={{cursor: 'pointer'}} onClick={darkMode.disable} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-1gkzy2q"><path fillRule="evenodd" clipRule="evenodd" d="M4.929 4.93a9.959 9.959 0 015.288-2.77l.99 1.565a6.5 6.5 0 009.067 9.067l1.566.992a9.959 9.959 0 01-2.769 5.287c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm3.496-.09a8 8 0 109.232 12.816 7.992 7.992 0 001.502-2.08A8.5 8.5 0 018.424 4.84z" fill="currentColor"></path></svg>
              :
              <svg style={{cursor: 'pointer'}} onClick={darkMode.enable} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="css-14nsevo"><path d="M11 4V1h2v3h-2zM4 13H1v-2h3v2zM11 20v3h2v-3h-2zM23 13h-3v-2h3v2zM5.636 7.05L3.515 4.93l1.414-1.414L7.05 5.636 5.636 7.05zM7.05 18.364l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414zM16.95 18.364l2.121 2.121 1.414-1.414-2.12-2.121-1.415 1.414zM20.485 4.929l-2.12 2.121-1.415-1.414 2.121-2.121 1.414 1.414z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 6a6 6 0 100 12 6 6 0 000-12zm-4 6a4 4 0 118 0 4 4 0 01-8 0z" fill="currentColor"></path></svg>
              }
            </div>
          </HeaderInner>
        </Header>
        <Bar><div>URL verification:</div><div>https://protonchain.com</div></Bar>
        <div className="welc-box">
          <h2>Welcome to <span style={{color: '#702eeb'}}>Proton</span> {accountData.actor}!</h2>
        </div>
        <MainProfileImg src={accountData.avatar} />
        <h3 style={{cursor: 'pointer'}} onClick={logout}>Logout</h3>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default SignedIn;
