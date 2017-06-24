import React from 'react';
import {Layout} from 'antd';
import {compose} from 'recompose';
import {determineCategory, maxarg, vec_result} from '../api';
const {Header, Content, Footer} = Layout;

const styles = {
  wrapper: {
    backgroundColor: null,
    minHeight: "100vh",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;',
  },
  logo: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "normal",
    letterSpacing: "0.5px",
  }
};

const App = (props) => {
  return (
      <Layout style={styles.wrapper}>
        <Header style={{position: 'fixed', width: '100%'}}>
          <span style={styles.logo}>Clevo</span>
        </Header>
        
        <Footer style={{textAlign: 'center'}}>
          ©2017 Created by Clevo Team
        </Footer>
      </Layout>
  );
};

// Container
export default compose(
)(App);